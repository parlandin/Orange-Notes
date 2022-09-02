const getDiffDay = (lastLogin: string) => {
  const today = new Date().getTime().toString();
  const lastDay = new Date(lastLogin).getTime().toString();
  const diff = parseFloat(today) - parseFloat(lastDay);
  const totalDays = Math.floor(diff / 1000 / 60 / 60 / 24);
  const totalHours = Math.floor(diff / 1000 / 60 / 60) % 24;
  return { totalDays, totalHours };
};

export default getDiffDay;
