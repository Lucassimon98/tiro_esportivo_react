import './index.css'

export function InputLabel(props) {
    return(
        <div className='d-flex flex-column mb-4'>
            <label for={props.id} className='ms-2'>{props.text}</label>
            <input type={props.type} id={props.id}/>
        </div>
    )
}