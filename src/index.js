import React, { useState }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BlogPost from './BlogPost';

function MD_App(){
  const [showMarkdown, setShowMarkdown] = useState(true);
  const [currentMdIndex, setCurrentMdIndex] = useState(0);
  const posts = ["演算法筆記","Pandas筆記", "JUCE 開發紀錄", "SSH遠端構建環境與訓練遇到的問題與解方", "YouTube Revenue Prediction"]
  const nextMd = () => {
    if (currentMdIndex < posts.length - 1) {
      setCurrentMdIndex(currentMdIndex + 1);
    }
  };

  const previousMd = () => {
    if (currentMdIndex > 0) {
      setCurrentMdIndex(currentMdIndex - 1);
    }
  };

  const mdPath = process.env.PUBLIC_URL + "/posts/" + posts[currentMdIndex] + ".md";

  return (
    <div>
      <button onClick={() => setShowMarkdown(true)}>Show MD</button>
      <button onClick={() => setShowMarkdown(false)}>Hide MD</button>
      <p></p>
      <button onClick={previousMd}>Previous</button>
      Currently Viewing: {posts[currentMdIndex]}
      <button onClick={nextMd}>Next</button>
      {showMarkdown && <BlogPost mdFilePath={mdPath}/>}
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MD_App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
