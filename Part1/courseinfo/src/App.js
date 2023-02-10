const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

const Content = (props) => {
  return (
    <div>
      {
      props.parts.map((part) => {
        return <Part key={part.name} name={part.name} exercises={part.exercises} />
      })
      }
    </div>
  );
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  );
}

const Total = (props) => {
  let result = 0;
  props.parts.map(part => {
    result += part.exercises;
  })
  return (
    <p>Number of exercises: {result}</p>
  );
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
    <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
    </div>
  )
}

export default App