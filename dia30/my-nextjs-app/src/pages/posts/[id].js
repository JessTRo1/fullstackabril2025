import {useRouter} from 'next/router';

export default function Post() {
    
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <h1>Post con id dinámico</h1>
            <p>Este es un post con ID: {id}</p>
        </div>
    );
}