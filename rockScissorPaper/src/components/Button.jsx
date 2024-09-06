export default function Button({ playName, play }) {
  return <button onClick={play}>{playName}</button>;
}
