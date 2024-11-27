function classifyBMI(bmi) {
    if (bmi < 18.5) {

        return {
            msg: "Underweight",
            color: 'var(--underweight)'
        };
    } else if (bmi >= 18.5 && bmi < 24.9) {

        return {
            msg: "Normal weight",
            color: 'var(--normal)'
        };
    } else if (bmi >= 25 && bmi < 29.9) {

        return {
            msg: "Overweight",
            color: 'var(--overweight)'
        };
    } else {

        return {
            msg: "Obese",
            color: 'var(--obese)'
        };
    }
}

function resultOutput(bmi) {

    const result = document.getElementById("result");
    const msg = document.getElementById("msg")
    result.innerText = `0`
    const updateCounter = () => {
        const c = +result.innerText;
        const increment = bmi / 100;

        if (c < bmi) {
            let r = Math.round((c + increment) * 100) / 100
            result.innerText = `${r}`

            setTimeout(updateCounter, 15)

            result.style.color = classifyBMI(r).color
        }
        else {
            const classify = classifyBMI(bmi)
            result.innerText = `${bmi}`
            msg.innerText = `${classifyBMI(bmi).msg}`
            result.style.color = `${classify.color}`
            msg.style.color = `${classify.color}`
        }
    }
    updateCounter();

}

function bmiCal() {
    let heightInput = document.getElementById("heightInput").value;
    let weightInput = document.getElementById("weightInput").value;



    if (!heightInput || !weightInput) {
        alert("Please enter both height and weight.");
    } else {

        let height = parseFloat(heightInput) / 100;
        let weight = parseFloat(weightInput);


        const bmi = Math.round((weight / height ** 2) * 100) / 100;

        console.log(bmi);
        resultOutput(bmi);
    }

}



