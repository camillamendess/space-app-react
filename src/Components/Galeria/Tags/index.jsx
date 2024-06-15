import tags from './tags.json';
import styled from 'styled-components';

const TagContainer = styled.div`
  display: flex;
  margin-top: 24px;
`

const TagTitulo = styled.p`
  color: #D9D9D9;
  font-size: 24px;
  margin-right: 24px;
`

const Tag = styled.button`
  font-size: 24px;
  background: rgba(217, 217, 217, 0.3);
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  color: #fff;
  border-radius: 10px;
  margin: 12px 5px;
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
`

const Tags = () => { 
    return (
      <TagContainer>
        <TagTitulo>Busque por tags:</TagTitulo>
        {tags.map(tag => <Tag key={tag.id}>{tag.titulo}</Tag>)}
      </TagContainer>
    )
}

export default Tags;