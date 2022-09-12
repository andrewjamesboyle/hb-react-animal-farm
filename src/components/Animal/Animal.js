export default function Animal(props) {
  return (
    <>
      <div className='animal'>
        <p>{props.animal.name}</p>
        <p>{props.animal.says}</p>
      </div>
    </>);
}
