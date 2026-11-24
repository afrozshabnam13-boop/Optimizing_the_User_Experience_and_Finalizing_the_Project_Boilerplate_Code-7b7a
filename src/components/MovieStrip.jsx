// ════════════════════════════════════════════════════════════════════════════
// MovieStrip.jsx — Horizontal scrollable row of movie poster cards (NEW in Lesson 6)
// ════════════════════════════════════════════════════════════════════════════

import { useState, useEffect, useRef } from 'react';
import { omdbDetails } from '../utils/api';
import { useApp } from '../context/AppContext';

export default function MovieStrip({ movies }) {
    const{openMovie} = useApp();
    const scrollRef = useRef(null);
    const detailsRef=useRef({});

    const [ clickingId, setClickingId]= useState(null);
    const [canLeft, setCanLeft] = useState(false);
    const [canRight, setCanRight] = useState(false);

    const validMovies = movies.filter(m => m.Poster && m.Poster !== 'N/A');

    use effect(() => {
        validMovies.forEach9Mmovie => {
            if(movie.imdbID && !detailsRef.current[movie.imdbID]) {
                omdbDetails(movie.imdbID).then(details => {
                    detailsRef.current[movie.imdbID] = details;
                });
}
