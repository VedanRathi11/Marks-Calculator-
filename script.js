const calculateFormEl = document.getElementById("calculateForm");
const resultEl = document.getElementById("result");

const calculateMarks = ()=> {
    event.preventDefault();
    const maxMarks = 400;
    const formData = new FormData(calculateFormEl);
    const data = {};
    formData.forEach((value,key)=>{
        data[key] = +value
    })

    const totalMarks = data.maths + data.english + data.hindi + data.science ;
    const percent = (totalMarks / maxMarks)*100;
    resultEl.innerText = `You have got ${totalMarks} marks out of 400 and your percentage is ${percent}%`;
}
