import './App.css';

const testData = [
  {
    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
    login: 'mojombo',
    url: 'https://api.github.com/users/mojombo',
  },
  {
    avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
    login: 'defunkt',
    url: 'https://api.github.com/users/defunkt',
  },
  {
    avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
    login: 'pjhyett',
    url: 'https://api.github.com/users/pjhyett',
  }
]

const CardList = (props) => {
  return (
    <div>{props.items.map(user => (
      <Card
        profile={user.avatar_url}
        name={user.login}
        url={user.url}
      />
    ))}
      
    </div>
  )
}


const Card = (props) => {
  return (
    <div style={{ margin: '1rem'}}>
      <img src={props.profile} alt="sample" width="100"/>
      <div style={{ display: 'inline-block', marginLeft: 10}}>
        <h5>{props.name}</h5>
        <pre>{props.url}</pre>
      </div>
    </div>
  )
}

function App(props) {
  return (
    <div className="container mt-3">
      <h1 className="text-center">{props.title}</h1>
      <CardList items={ testData }/>
    </div>
   )
}

export default App;
