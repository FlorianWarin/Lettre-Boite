import { useNavigate, useParams } from 'react-router-dom'
import SearchBarre from '../Components/searchBarre'
import { useState } from 'react'

const DetailsFilms = () => {

    const { id } = useParams()
    const [note, setNote] = useState(0);
    const [commentaire, setCommentaire] = useState("");

    const enregistrerAvis = async () => {
    
        const response = await fetch('http://localhost:8080/api/avis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filmId: id, note, commentaire })
        });
        if(response.ok) alert("Avis enregistré !");
    };

    return (
        <div className="p-10 text-black">
        <h1>Détails du film {id}</h1>
        
        <input type="number" onChange={(e) => setNote(e.target.value)} placeholder="Ta note /10" />
        <textarea onChange={(e) => setCommentaire(e.target.value)} placeholder="Ton avis..." />
        <button onClick={enregistrerAvis}>Publier</button>
        </div>
    );

}

export default DetailsFilms;