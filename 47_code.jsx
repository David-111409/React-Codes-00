import React, { useState } from "react";
function Main() {
    const [formInput, setFormInput] = useState({
        name: "",
        age: "",
        email: "",
        areStudent: false,
        textArea: "",
        job: "",
    });
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="text"
                value={formInput.name}
                onChange={(e) =>
                    setFormInput({ ...formInput, name: e.target.value })
                }
            />
            <label htmlFor="age">Age:</label>
            <input
                id="age"
                type="text"
                value={formInput.age}
                onChange={(e) =>
                    setFormInput({ ...formInput, age: e.target.value })
                }
            />
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="text"
                value={formInput.email}
                onChange={(e) =>
                    setFormInput({ ...formInput, email: e.target.value })
                }
            />
            <br />
            <label htmlFor="areStudent">Are you a student?</label>
            <input
                checked={formInput.areStudent}
                type="checkbox"
                id="areStudent"
                onChange={(e) =>
                    setFormInput({ ...formInput, areStudent: e.target.checked })
                }
            />
            <textarea
                name=""
                id=""
                value={formInput.textArea}
                onChange={(e) =>
                    setFormInput({ ...formInput, textArea: e.target.value })
                }
            ></textarea>

            <input
                checked={formInput.job === "teacher"}
                name="job"
                type="radio"
                id="teacher"
                value="teacher"
                onChange={(e) =>
                    setFormInput({ ...formInput, job: e.target.value })
                }
            />
            <label htmlFor="teacher">Teacher</label>

            <input
                checked={formInput.job === "programmer"}
                name="job"
                type="radio"
                id="programmer"
                value="programmer"
                onChange={(e) =>
                    setFormInput({ ...formInput, job: e.target.value })
                }
            />
            <label htmlFor="programmer">Programmer</label>

            <input
                checked={formInput.job === "student"}
                name="job"
                type="radio"
                id="student"
                value="student"
                onChange={(e) =>
                    setFormInput({ ...formInput, job: e.target.value })
                }
            />
            <label htmlFor="student">Student</label>

            <button
                onClick={(e) => {
                    e.preventDefault();
                    console.log(formInput);
                }}
                type="submit"
            >
                Submit
            </button>
        </form>
    );
}

export default Main;
