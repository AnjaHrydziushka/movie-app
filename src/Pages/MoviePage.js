import React from 'react'
import { useParams } from 'react-router-dom';

export default function MoviePage() {
    const route_parameters = useParams();

    return (
        <div>
            <p>Some movie here</p>
        </div>
    )
}

