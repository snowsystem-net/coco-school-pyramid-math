import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {

  const ans = [];
  for (let i = 1; i <= 40; i++) ans[i] = i;

  const [ans11, setAns11] = useState<number | null>(null);
  const [ans21, setAns21] = useState<number | null>(null);
  const [ans22, setAns22] = useState<number | null>(null);
  const [num31, setNum31] = useState<number>(0);
  const [num32, setNum32] = useState<number>(0);
  const [num33, setNum33] = useState<number>(0);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    setNum31(Math.floor(Math.random() * 5) + 1);
    setNum32(Math.floor(Math.random() * 5) + 1);
    setNum33(Math.floor(Math.random() * 5) + 1);
  }, []);


  const handleChange11 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setAns11(parseInt(e.target.value));
  }
  const handleChange21 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setAns21(parseInt(e.target.value));
  }
  const handleChange22 = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setAns22(parseInt(e.target.value));
  }

  const handleClickAns = (e: React.MouseEvent<HTMLInputElement>) => {

    if (num31 + num32 === ans21 && num32 + num33 === ans22 && ans21 + ans22 === ans11) {
      setResult("○ せいかい");
    } else {
      setResult("× まちがい");
    }
  }

  const handleClickNextQuestion = (e: React.MouseEvent<HTMLInputElement>) => {
    setNum31(Math.floor(Math.random() * 5) + 1);
    setNum32(Math.floor(Math.random() * 5) + 1);
    setNum33(Math.floor(Math.random() * 5) + 1);
    setResult("");
    setAns11(null);
    setAns21(null);
    setAns22(null);
  }

  return (
    <div className="App">
      <header className="flex justify-center mb-5">
        <h2 className="text-3xl mt-5">たしざん ピラミッド</h2>
      </header>
      <div className="flex justify-center">
        <div
          className="flex items-center justify-center text-3xl border-2 border-blue-500 bg-blue-200 w-20 h-20 m-1 rounded-lg">
          <select name="num11" id="num11" value={ans11 ? ans11.toString() : ""} className="bg-blue-200" onChange={handleChange11}>
            <option value=""></option>
            {ans.map((item) =>
              <option key={`1-${item}`} value={item}>{item}</option>
            )}
          </select>
        </div>
      </div>
      <div className="flex justify-center">
        <div
          className="flex items-center justify-center text-3xl border-2 border-green-500 bg-green-200 w-20 h-20 m-1 rounded-lg">
          <select name="num21" id="num21" value={ans21 ? ans21.toString() : ""} className="bg-green-200" onChange={handleChange21}>
            <option value=""></option>
            {ans.map((item) =>
              <option key={`2-1-${item}`} value={item}>{item}</option>
            )}
          </select>
        </div>
        <div
          className="flex items-center justify-center text-3xl border-2 border-green-500 bg-green-200 w-20 h-20 m-1 rounded-lg">
          <select name="num22" id="num22" value={ans22 ? ans22.toString() : ""} className="bg-green-200" onChange={handleChange22}>
            <option value=""></option>
            {ans.map((item) =>
              <option key={`2-2-${item}`} value={item}>{item}</option>
            )}
          </select>
        </div>

      </div>
      <div className="flex justify-center">
        <div
          className="flex items-center justify-center text-3xl border-2 border-red-500 bg-red-200 w-20 h-20 m-1 rounded-lg">{num31}
        </div>
        <div
          className="flex items-center justify-center text-3xl border-2 border-red-500 bg-red-200 w-20 h-20 m-1 rounded-lg">{num32}
        </div>
        <div
          className="flex items-center justify-center text-3xl border-2 border-red-500 bg-red-200 w-20 h-20 m-1 rounded-lg">{num33}
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <input type="button" value="こたえあわせ" className="bg-pink-500 text-white font-bold m-5 py-2 px-5 rounded" onClick={handleClickAns} />
        <div className="m-5 py-2 px-5 rounded text-center text-3xl">{result}</div>
        <input type="button" value="つぎのもんだい" className="bg-blue-500 text-white font-bold m-5 py-2 px-5 rounded" onClick={handleClickNextQuestion} />
      </div>
    </div>
  );
}
