import {  useEffect, useState } from "react";
import { quizData,Question } from "../data/questions";

interface HighScore{
    name:string;
    score:number;
}
const QuizApp:React.FC=()=>{

    const[currentQuestion,setCurrentQuestion]=useState<number>(0);
    const[selectedOption,setSelectedOption]=useState<string| null>(null);
    const[score,setScore]=useState<number>(0);
    const[quizFinished,setQuizFinished]=useState<boolean>(false);
    const[name,setName]=useState<string>("")
    const[highScores,setHighScores]=useState<HighScore[]>([]);


    useEffect(()=>{
        const storedScores=localStorage.getItem("highScores");
        if(storedScores){
            setHighScores(JSON.parse(storedScores));
        }
    },[])
    const handleAnswerClick=(option:string)=>{
        setSelectedOption(option);
    }

    const saveHighscore=()=>{
        if(name.trim()){
            const newScores=[...highScores,{name,score}].sort((a,b)=>b.score-a.score);
            setHighScores(newScores);
            localStorage.setItem("highScores",JSON.stringify(newScores));
        }
    }

    const restartQuiz=()=>{
        setCurrentQuestion(0);
        setScore(0);
        setSelectedOption(null);
        setQuizFinished(false);
        setName("");
    }

    const handleNextQuestion=()=>{
        if(selectedOption===quizData[currentQuestion].answer){
            setScore(score+1);
        }
        if(currentQuestion+1<quizData.length){
            setCurrentQuestion(currentQuestion+1);
            setSelectedOption(null);
        }else{
            setQuizFinished(true);
        }
        console.log(quizFinished)
    }
    return(
<>
<div>

        <h1>This is Quiz app</h1>
        {quizFinished?(
            <div>
                <h1>
                YourScore:{score}
                </h1>
                <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} />
                <button onClick={restartQuiz}>Reset Quiz</button>
                <button onClick={saveHighscore}>Save HighScore</button>
                <ul>
                    {highScores.map((hs,index)=>(
                        <li key={index}>{hs.name}:{hs.score }</li>
                    ))}
                </ul>
            </div>
        ):
        (
            <div className="flex flex-col bg-red-600">
        <h1>{quizData[currentQuestion].question}</h1>
    {
        quizData[currentQuestion].options.map((item)=>(
            <button className={`cursor-pointer bg-amber-300 w-1/3 m-4  ${selectedOption===item?"bg-blue-400":"bg-gray-200"}`} key={item} 
            onClick={()=>handleAnswerClick(item)}>
            {item}
            </button>
            
        ))
    }
    <button onClick={handleNextQuestion} disabled={!selectedOption}  className="mt-4 px-4 py-2 bg-green-500 text-white rounded w-full">{currentQuestion+1<quizData.length?"Next":"Finish"}</button>
    </div>
        )
}
    </div>
</>
    )
}

export default QuizApp;