function displayCurrentDate(times) {
  const now = new Date();

  const dd = String(now.getDate()).padStart(2, '0');
  const mm = String(now.getMonth() + 1).padStart(2, '0'); 
  const yyyy = now.getFullYear();

  const formattedDate = `${dd}-${mm}-${yyyy}`;

  for (let i = 0; i < times; i++) {
    console.log(formattedDate);
  }
}

if (require.main === module) {
  const times = Number(process.argv[2]) || 1;
  displayCurrentDate(times);
}

module.exports = displayCurrentDate;
