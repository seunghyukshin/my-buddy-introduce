import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import marked from 'marked';

const Editor = () => {
  const [text, setText] = useState('');

  let start = null, end = null;
  const textareaRef = useRef();

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
  }

  const handleMouseLeave = (event) => {
    start = event.target.selectionStart;
    end = event.target.selectionEnd;
  }

  const onClickH1 = () => {
    if(!end){
      setText(text + '# ');
      textareaRef.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `# ${contents}` + after);

    textareaRef.current.focus();
  }

  const onClickH2 = () => {
    if(!end){
      setText(text + '## ');
      textareaRef.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `## ${contents}` + after);

    textareaRef.current.focus();
  }

  const onClickH3 = () => {
    if(!end){
      setText(text + '### ');
      textareaRef.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `### ${contents}` + after);

    textareaRef.current.focus();
  }

  const onClickLi = () => {
    if(!end){
      setText(text + '- ');
      textareaRef.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `- ${contents}\n` + after);

    textareaRef.current.focus();
  }

  const onClickBold = () => {
    if(!end){
      setText(text + '____ ');
      textareaRef.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `__${contents}__` + after);

    textareaRef.current.focus();
  }

  const onClickStrikeout = () => {
    if(!end){
      setText(text + '~~ ');
      textareaRef.current.focus();
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `~${contents}~` + after);

    textareaRef.current.focus();
  }
  
  const onClickReset = () => {
    setText('');
  }

  return (
    <Container>
      <Section>
        <Menu>
          <Button onClick={onClickH2}>h2</Button>
          <Button onClick={onClickH1}>h1</Button>
          <Button onClick={onClickH3}>h3</Button>
          <Button onClick={onClickLi}>li</Button>
          <Button onClick={onClickBold}>bold</Button>
          <Button onClick={onClickStrikeout}>strikeout</Button>
          <Button onClick={onClickReset}>reset</Button>
        </Menu>
        <Textarea ref={textareaRef} cols="30" rows="10" value={text} onChange={handleChange} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}/>
      </Section>
      <Section>
        <div dangerouslySetInnerHTML={renderText(text)} />
      </Section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 10px;
  width: 100%;
  height: 100%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  min-width: 30px;
  padding: 2px;

  border: 1px solid grey;
  border-radius: 2px;
  margin: 2px;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100%;
  margin: 2px;

  resize:none;
`;

export default Editor;