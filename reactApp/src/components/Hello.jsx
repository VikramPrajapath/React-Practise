function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message} from {person.name} {person.emoji} {person.seatNumber}
      </h1>
    </div>
  );
}

export default Hello;
