import React, { useState, useRef } from 'react';
import marked from 'marked';
import './Editor.css';

const Editor = () => {
  const [text, setText] = useState('');

  let start = null, end = null;
  const ta = useRef();

  const renderText = (text) => {
    const __html = marked(text);

    return {__html};
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleMouseUp = (event) => {
    start = event.target.selectionStart;
    end = event.target.selectionEnd;

    console.log(start, end);
  }
  const handleMouseLeave = (event) => {
    start = event.target.selectionStart;
    end = event.target.selectionEnd;

    console.log(start, end);
  }

  const onClickH1 = () => {
    if(!end){
      setText(text + '# ');
      ta.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `# ${contents}` + after);

    ta.current.focus();
  }

  const onClickH2 = () => {
    if(!end){
      setText(text + '## ');
      ta.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `## ${contents}` + after);

    ta.current.focus();
  }

  const onClickH3 = () => {
    if(!end){
      setText(text + '### ');
      ta.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `### ${contents}` + after);

    ta.current.focus();
  }

  const onClickLi = () => {
    if(!end){
      setText(text + '- ');
      ta.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `- ${contents}\n` + after);

    ta.current.focus();
  }

  const onClickBold = () => {
    if(!end){
      setText(text + '\`\` ');
      ta.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `\`${contents}\`` + after);

    ta.current.focus();
  }

  const onClickStrikeout = () => {
    if(!end){
      setText(text + '~~ ');
      ta.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `~${contents}~` + after);

    ta.current.focus();
  }
  
  const onClickReset = () => {
    setText('');
  }

  return (
    <div className="container">
      <div className="section">
        <div className="menu">
          <div className="button" onClick={onClickH1}>h1</div>
          <div className="button" onClick={onClickH2}>h2</div>
          <div className="button" onClick={onClickH3}>h3</div>
          <div className="button" onClick={onClickLi}>li</div>
          <div className="button" onClick={onClickBold}>bold</div>
          <div className="button" onClick={onClickStrikeout}>strikeout</div>
          <div className="button" onClick={onClickReset}>reset</div>
        </div>
        <textarea ref={ta} name="" id="" cols="30" rows="10" className="input" value={text} onChange={handleChange} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}>
          
        </textarea>
      </div>
      <div className="section">
        <div dangerouslySetInnerHTML={renderText(text)} />
      </div>
    </div>
  )
}

export default Editor;