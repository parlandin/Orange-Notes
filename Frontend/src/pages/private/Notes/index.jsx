import React, { useState, useEffect } from "react";
import S from "./notes.style";
import ButtonWithIcon from "../../../components/ButtonWithIcon";
import { BsGrid1X2Fill } from "react-icons/bs";
import { FaList, FaPlus } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import api from "../../../api";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import SectionNotes from "../../../components/SectionNotes";

const Notes = () => {
  //TODO: refazer essa tela separando responsabilidades
  const [currentMode, setCurrentMode] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [authUser] = useAuth();
  const { user, token } = authUser;

  //route
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/notes/newnote", { replace: true });
  };

  const switchMode = (mode) => {
    window.localStorage.setItem("layout", mode);
    return setCurrentMode(mode);
  };

  const getAllNotes = async () => {
    const response = await api.get(`/notes/allnotes/${user.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.status == 200) {
      throw new Error("Ocorreu um erro");
    }
    //console.log(response.data);
    return response.data;
  };

  const { data, isError, isLoading } = useQuery(["notes"], getAllNotes, {
    refetchOnWindowFocus: false,
  });

  const parserToLowerCase = (string) => {
    return string.toLowerCase();
  };

  //search
  const searchFunction = (e) => {
    if (e.key === "Enter" || e.type == "click") {
      const lowerCaseInput = parserToLowerCase(inputSearch);
      const filterData = data.filter((note) => {
        const { title, content } = note;

        const lowerCaseTile = parserToLowerCase(title);
        const lowerCaseContent = parserToLowerCase(content);

        return (
          lowerCaseTile.includes(lowerCaseInput) ||
          lowerCaseContent.includes(lowerCaseInput)
        );
      });

      return setSearchData(filterData);
    }
    return;
  };

  useEffect(() => {
    const salvedMode = window.localStorage.getItem("layout");
    if (salvedMode) {
      setCurrentMode(salvedMode);
    }
  }, []);

  if (isLoading) return <Loading />;

  return (
    <S.Container>
      <S.TopFixedContainer>
        <S.FixedContainer>
          <S.Header>
            <S.Title>Anotações</S.Title>
            <ButtonWithIcon
              icon={<FaPlus size="100%" />}
              label="Nova anotação"
              padding="2px 4px"
              backgroudFill={true}
              color="#000"
              margin="0px 0px 0px 10px"
              fontSize={"0.8rem"}
              onClick={handleOnClick}
            />
          </S.Header>

          <S.GenericSection>
            <S.InputLabel>
              <S.Input
                type="text"
                placeholder="Pesquisar anotação"
                value={inputSearch}
                onKeyUp={(e) => searchFunction(e)}
                onChange={(e) => setInputSearch(e.target.value)}
              />
              <button onClick={(e) => searchFunction(e)}>
                <IoSearch size="100%" />
              </button>
            </S.InputLabel>

            <S.SectionButtons>
              <S.Button
                aria-label="botão: mudar para modo lista"
                title="mudar para modo lista"
                className={currentMode == "list" ? "active" : "disable"}
                onClick={() => switchMode("list")}
              >
                <FaList className="list" size="100%" />
              </S.Button>

              <S.Button
                aria-label="botão: mudar para modo grid"
                title="mudar para modo grid"
                className={currentMode == "grid" ? "active" : "disable"}
                onClick={() => switchMode("grid")}
              >
                <BsGrid1X2Fill size="100%" />
              </S.Button>
            </S.SectionButtons>
          </S.GenericSection>
        </S.FixedContainer>
      </S.TopFixedContainer>

      {inputSearch.length > 0 && (
        <SectionNotes
          currentMode={currentMode}
          data={searchData}
          type="search"
        />
      )}
      {inputSearch.length <= 0 && (
        <SectionNotes currentMode={currentMode} data={data} type="fetchData" />
      )}
    </S.Container>
  );
};

export default Notes;
