import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

const MesReviewsFilms = () => {
    const navigate = useNavigate();
    const userName = localStorage.getItem("userName");
    
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
        const getFullData = async () => {
            try {
                setLoading(true);
                
                const response = await fetch(`http://localhost:8080/api/getreviews/${userName}`);
                const reviewsData = await response.json();

                
                const completeData = await Promise.all(
                    reviewsData.map(async (rev) => {
                        const apiRes = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=${rev.movieID}`);
                        const apiData = await apiRes.json();
                        
                        
                        return {
                            ...rev,
                            movieDetails: apiData.description?.[0] || {} 
                        };
                    })
                );

                setReviews(completeData);
            } catch (error) {
                console.error("Erreur dans la séquence :", error);
            } finally {
                setLoading(false);
            }
        };

        if (userName) getFullData();
    }, [userName]);

    return (
        <div className="min-h-screen p-10 bg-[#f7dcbe]">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-10">
                    <button onClick={() => navigate('/films')} className="btn btn-outline border-[#af7933] text-[#af7933]">
                        ← Retour aux films
                    </button>
                    <h1 className="text-4xl font-bold text-black text-center">Mes Avis Ciné</h1>
                    <div className="badge badge-lg border-2 border-black p-4 bg-white text-black font-bold">
                        User: {userName}
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center mt-20">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.length > 0 ? (
                            reviews.map((item) => (
                                <div key={item._id} className="card card-side bg-white shadow-xl border-2 border-black overflow-hidden hover:scale-105 transition-transform duration-300">
                                    <figure className="w-1/3">
                                        <img 
                                            src={item.movieDetails?.["#IMG_POSTER"] || "https://via.placeholder.com/150"} 
                                            alt="Poster"
                                            className="h-full object-cover"
                                        />
                                    </figure>
                                    <div className="card-body w-2/3 p-4">
                                        <h2 className="card-title text-black text-lg line-clamp-1">
                                            {item.movieDetails?.["#TITLE"] || "Titre inconnu"}
                                        </h2>
                                        <p className="text-gray-500 text-sm font-semibold italic">
                                            {item.movieDetails?.["#YEAR"]}
                                        </p>
                                        
                                        <div className="divider my-1"></div>
                                        
                                        <div className="flex items-center gap-1 mb-2">
                                            <span className="text-orange-500 text-xl">★</span>
                                            <span className="font-bold text-black">{item.movieRating}/5</span>
                                        </div>
                                        
                                        <p className="text-gray-700 text-sm italic line-clamp-3">
                                            "{item.movieReview}"
                                        </p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 bg-white/50 rounded-xl border-2 border-dashed border-gray-400 text-gray-600">
                                Aucun film enregistré pour le moment.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default MesReviewsFilms;