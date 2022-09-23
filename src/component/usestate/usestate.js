import { useState, useRef } from "react";

export function Main() {
    // let [fruitsName, setFruitName] = useState(["apple", "mango", "banna", "peach"])
    // let use=useRef();
    // use.current.innerText="My list"

    let [num, numset] = useState(Math.floor(Math.random() * 50 + 1));
    let [num2, num2set] = useState(Math.floor(Math.random() * 50 + 1));

    function incre() {
        num++;
        numset(num);
    }
    function dec() {
        num2set(--num2);
    }




    return <div>
        <h1>{num}</h1>

        <button onClick={incre} >On click </button>
        <h1>{num2}</h1>
        <button onClick={dec} >decrease </button>
        {/* <div>
            <h1 ref={use}></h1>
            <ol>
                {
                    fruitsName.map((fruits) => {
                        return <li>{fruits}</li>
                    })
                }
            </ol>
        </div> */}

    </div>
}