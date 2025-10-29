import React, { useState } from 'react'



export default function Top() {

  const [text,seText] = useState<string>("");
  const [memo,setMemo] = useState<string[]>([]);


  //入力検知
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    seText(e.target.value);
  }


  //追加
  const onAdd = () => {
    if (text.trim() === "") return;
    setMemo([...memo,text]);
    seText("");
  }


  //削除
  const onDelete = (index:number) => {
    setMemo(memo.filter((_, i)=> i !== index ));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          簡単MEMOページ 📝
        </h1>

        {/* 入力エリア */}
        <div className="flex gap-2 mb-6">
          <input
            value={text}
            onChange={onChange}
            type="text"
            placeholder="メモを入力..."
            className="flex-1 border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            onClick={onAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            追加
          </button>
        </div>

        {/* メモ一覧 */}
        <ul className="space-y-3">
          {memo.map((item, id) => (
            <li
              key={id}
              className="flex justify-between items-center bg-gray-50 border border-gray-200 p-3 rounded-lg shadow-sm"
            >
              <span className="text-gray-800">{item}</span>
              <button
                onClick={() => onDelete(id)}
                className="bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl text-white text-sm px-3 py-1.5 rounded-lg transition"
              >
                削除
              </button>
            </li>
          ))}
        </ul>

        {memo.length === 0 &&(
          <p className="text-gray-400 text-center mt-6">まだメモがありません</p>
        )}

      </div>
    </div>
  )
}
