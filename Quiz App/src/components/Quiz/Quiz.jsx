import React from "react";
import { data } from "../../assets/data";
let l = data.length;
function Quiz() {
    const [index, setIndex] = React.useState(0);
    const [chosen, setChosen] = React.useState({
        current: 0,
        studentAnswers: [],
        count: 0,
    });
    let ans;
    let q;
    if (index <= l - 1) {
        q = data[index];
        ({ ans } = q);
    }
    function handleNext() {
        setIndex((prev) => prev + 1);
        setChosen({
            ...chosen,
            current: 0,
        });
    }

    function handleClick(id, value) {
        if (chosen.current) {
            return;
        }
        setChosen({
            ...chosen,
            count: chosen.count + +(ans === id),
            studentAnswers: [
                ...chosen.studentAnswers,
                { Qn: index + 1, hisOption: { id, value } },
            ],
            current: id,
        });
    }

    function handleReset() {
        setIndex(0);
        setChosen({
            ...chosen,
            current: 0,
            studentAnswers: [],
            count: 0,
        });
    }
    console.log(chosen.studentAnswers);
    if (index < l) {
        let { question, option1, option2, option3, option4 } = q;
        const options = [
            { id: 1, value: option1 },
            { id: 2, value: option2 },
            { id: 3, value: option3 },
            { id: 4, value: option4 },
        ];
        return (
            <div className="container">
                <h1>Quiz App</h1>
                <hr />
                <h2>
                    {index + 1}. {question}
                </h2>
                <ul>
                    {options.map((opt) => {
                        if (
                            chosen.current === ans &&
                            opt.id === chosen.current
                        ) {
                            return (
                                <li key={opt.id} className={"right"}>
                                    {opt.value}
                                </li>
                            );
                        }
                        if (
                            chosen.current === opt.id &&
                            chosen.current !== ans
                        ) {
                            return (
                                <li key={opt.id} className="wrong">
                                    {opt.value}
                                </li>
                            );
                        }
                        if (opt.id === ans && chosen.current) {
                            return (
                                <li key={opt.id} className="right">
                                    {opt.value}
                                </li>
                            );
                        }
                        return (
                            <li
                                key={opt.id}
                                onClick={() => handleClick(opt.id, opt.value)}
                            >
                                {opt.value}
                            </li>
                        );
                    })}
                </ul>
                <button
                    className={!chosen.current ? "disabled" : ""}
                    onClick={handleNext}
                >
                    {index < l - 1 ? "Next" : "Finish"}
                </button>
                <div className="result">
                    Qn. <span className="box">{index + 1}</span> of{" "}
                    <span className="box">{l}</span> Score
                    <span className="box">{chosen.count}</span>
                </div>
            </div>
        );
    } else {
        return (
            <h1 className="res" style={{ color: "white" }}>
                <div>You scored :</div>
                <span className="box">
                    {chosen.count} / {l}
                </span>

                <button className="reset" onClick={handleReset}>
                    RESET
                </button>
            </h1>
        );
    }
}

export default Quiz;
