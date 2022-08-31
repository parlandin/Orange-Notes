import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import S from "./newNote.style";
import ButtonWithIcon from "../../../../components/ButtonWithIcon";
import { TiArrowBack } from "react-icons/ti";

const NewNote = () => {
  const navigate = useNavigate();
  const [inputForm, setInputForm] = useState({
    title: "",
    content: "",
    titleColor: "#1e1e1e",
    contentColor: "#1e1e1e",
    boxColor: "#fff",
  });

  console.log(inputForm);

  const handleOnClickBack = () => {
    navigate("/notes", { replace: true });
  };
  return (
    <S.Container>
      <S.ContainerFixed>
        <S.Header>
          <S.Title>Nova anotação</S.Title>
          <ButtonWithIcon
            icon={<TiArrowBack size="100%" />}
            padding="2px 4px"
            label="Voltar"
            backgroudFill={true}
            reverse={true}
            onClick={handleOnClickBack}
            margin="0 15px 0px 10px"
          />
        </S.Header>
      </S.ContainerFixed>

      <S.Form>
        <S.SectionColor>
          <S.ButtonsColorContainer>
            <S.ColorInput preview={inputForm.titleColor}>
              <span>Cor do titulo</span>
              <input
                type="color"
                value={inputForm.titleColor}
                onChange={(e) =>
                  setInputForm((prev) => {
                    return { ...prev, titleColor: e.target.value };
                  })
                }
              />
              <div></div>
            </S.ColorInput>

            <S.ColorInput preview={inputForm.contentColor}>
              <span>Cor do conteudo</span>
              <input
                type="color"
                value={inputForm.contentColor}
                onChange={(e) =>
                  setInputForm((prev) => {
                    return { ...prev, contentColor: e.target.value };
                  })
                }
              />
              <div></div>
            </S.ColorInput>

            <S.ColorInput preview={inputForm.boxColor}>
              <span>Cor do caixa</span>
              <input
                type="color"
                value={inputForm.boxColor}
                onChange={(e) =>
                  setInputForm((prev) => {
                    return { ...prev, boxColor: e.target.value };
                  })
                }
              />
              <div></div>
            </S.ColorInput>
          </S.ButtonsColorContainer>
          <S.Warning>Obs: Essas cores ficam apenas nos cards</S.Warning>
        </S.SectionColor>

        <S.TitleInput
          boxColor={inputForm.boxColor}
          titleColor={inputForm.titleColor}
          type="text"
          placeholder="Digite o titulo aqui"
          value={inputForm.title}
          onChange={(e) =>
            setInputForm((prev) => {
              return { ...prev, title: e.target.value };
            })
          }
        />
        <S.ContentInput
          contentColor={inputForm.contentColor}
          boxColor={inputForm.boxColor}
          placeholder="Digite o conteudo"
          value={inputForm.content}
          onChange={(e) =>
            setInputForm((prev) => {
              return { ...prev, content: e.target.value };
            })
          }
        ></S.ContentInput>
      </S.Form>
    </S.Container>
  );
};

export default NewNote;
