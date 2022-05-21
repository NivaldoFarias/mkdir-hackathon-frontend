import { AiOutlineFileText } from 'react-icons/ai';

export default function File({ name }) {
  return (
    <div className='directory_item'>
      <AiOutlineFileText />
      <h2>{name}</h2>
    </div>
  );
}
