import react from 'react';
import Card from './Card'



const CardList = ({robot}) => {
    const CardComponent = robot.map((user,i) =>
    {
        return <Card id ={robot[i].id} name = {robot[i].name} email = {robot[i].email} />
    })

    return(
        <div>
            {CardComponent}
        </div>
    )
}

export default CardList;