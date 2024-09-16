
import './Myhobbies.css'

const hobbies = [
    { title: "Trening", isfavorite: false, upVote: 0, id: 1},
    { title: "Spille", isfavorite: true, upVote: 0, id: 2}
]
export default function MyHobbies () {

    const listItems = hobbies.map(hobby =>
        <li key={hobby.id} style={  { color: hobby.isfavorite ? 'magenta' : 'white'  }  }>
            {hobby.title}
            <VoteButton></VoteButton>
        </li>
    )

    return (
        <>
           <h1 className='header'>Marcus Falch</h1>
           <ul>{listItems}</ul>
        </>
    )
}


function VoteButton() {
    const [vote, setVote] = useState(0)

    function handleClick(){
        setVote(vote + 1)
    }

    return (
        <button className='button' onClick={handleClick}>
            Voted {vote} times
        </button>
    )
}