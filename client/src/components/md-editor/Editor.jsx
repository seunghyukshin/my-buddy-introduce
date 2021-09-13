import React, { useState, useRef, useEffect } from 'react';
import styled, {css} from 'styled-components';
import marked from 'marked';

const Editor = () => {
  const [text, setText] = useState('');
  const [tag, setTag] = useState(-1);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [write, setWrite] = useState(true);

  const textareaRef = useRef();

  const renderText = (text) => {
    const __html = marked(text);

    return {__html};
  }

  const handleChange = (event) => {
    setText(event.target.value);
  }

  const handleMouseUp = (event) => {
    setStart(event.target.selectionStart);
    setEnd(event.target.selectionEnd);
  }

  const handleMouseLeave = (event) => {
    setStart(event.target.selectionStart);
    setEnd(event.target.selectionEnd);
  }

  const onClickH1 = () => {
    if(!end){
      setText(text + '# ');
      setTag(0);
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `# ${contents}` + after);
    setTag(after.length);
  }

  const onClickH2 = () => {
    console.log('start', start, 'end', end);
    if(!end){
      setText(text + '## ');
      setTag(0);
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `## ${contents}` + after);
    setTag(after.length);
  }

  const onClickH3 = () => {
    if(!end){
      setText(text + '### ');
      setTag(0);
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `### ${contents}` + after);

    setTag(after.length);
  }

  const onClickLi = () => {
    if(!end){
      console.log('li');
      setText(text + '- ');
      setTag(0);
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `- ${contents}` + after);
    setTag(after.length);
  }

  const onClickBold = () => {
    if(!end){
      setText(text + '****');
      setTag(2);
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `**${contents}**` + after);

    setTag(after.length + 2);
  }

  const onClickItalic = () => {
    if(!end){
      setText(text + '**');
      setTag(1);
      return;
    }

    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);

    setText(before + `*${contents}*` + after);

    setTag(after.length + 1);
  }

  const onClickStrikeout = () => {
    if(!end){
      setText(text + '~~');
      setTag(1);
      return;
    }
    
    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);
    
    setText(before + `~${contents}~` + after);
    setTag(after.length + 1);
  }

  const onClickLink = () => {
    if(!end){
      setText(text + '[]()');
      setTag(3);
      return;
    }
    
    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);
    
    setText(before + `[${contents}]()` + after);
    setTag(after.length + 3);
  }

  const onClickImage = () => {
    if(!end){
      setText(text + '![]()');
      setTag(1);
      return;
    }
    
    const before = text.substring(0, start);
    const contents = text.substring(start, end);
    const after = text.substring(end, text.length);
    
    setText(before + `![${contents}]()` + after);
    setTag(after.length + 1);
  }

  useEffect(() => {
    if(tag != -1){
      textareaRef.current.focus();
      textareaRef.current.selectionStart = textareaRef.current.selectionEnd = text.length - tag;
      setTag(-1);
    }
  }, [tag]);

  useEffect(() => {
    setStart(textareaRef.current.selectionStart);
    setEnd(textareaRef.current.selectionEnd);
  }, [text]);

  return (
    <Container>
      <Section>
        <Menu>
          <Left>
            <Button onClick={() => setWrite(true)} selected={write}>편집기</Button>
            <Button onClick={() => setWrite(false)} selected={!write}>미리보기</Button>
          </Left>
          {write && (
            <Right>
              <Button onClick={onClickH1}>h1</Button>
              <Button onClick={onClickH2}>h2</Button>
              <Button onClick={onClickH3}>h3</Button>
              <Button onClick={onClickLi}>행</Button>
              <Button onClick={onClickBold}>굵게</Button>
              <Button onClick={onClickItalic}>기울기</Button>
              <Button onClick={onClickStrikeout}>취소선</Button>
              <Button onClick={onClickLink}>링크</Button>
              <Button onClick={onClickImage}>이미지</Button>
            </Right>
          )}
        </Menu>
        <EditContainer>
          {write ? (
            <Textarea ref={textareaRef} cols="30" rows="10" value={text} onChange={handleChange} onMouseUp={handleMouseUp} onMouseLeave={handleMouseLeave}/>
          ) : (
            <Preview dangerouslySetInnerHTML={renderText(text)} />    
          )}
        </EditContainer>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  width:100%;
  height:100%;
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
  width:100%;
  justify-content:space-between;
  flex-wrap: wrap;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-bottom: none;

  height: 30px;
  min-width: 40px;
  color:#373a3c;

  font-size:14px;
  padding:8px; 

  &:hover{
    cursor:pointer;
  }

  & + &{
    margin-left:2px;
  }

  ${props => 
    props.selected 
    && css`
      border: 1px solid #ddd;
      border-radius: .25rem .25rem 0 0 ;
      color: #55595c;
      border-bottom: none;
    `
  }
`;

const EditContainer = styled.div`
  display: flex;
  width:100%;
  min-height: 400px;

  border: 1px solid #ddd;
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 100%;
  resize:none;
  border:none;

  &:focus{
    outline:none;
  }
`;

const Preview = styled.div`
  font-size: 14px;
  color: #373a3c;

  & p {
    margin: 2px;
  }

  & li {
    margin-left: 20px;
    margin-bottom:20px;
  }

  & a {
    color:#0275d8;
    text-decoration: none;
  }

  & blockquote{
    padding-left: 20px;
    border-left:4px solid #ccc;
  }

  & code{
    background: #ddd;
    border-radius: 2px;
    padding: 1px;
    margin:2px;
  }
`;

export default Editor;