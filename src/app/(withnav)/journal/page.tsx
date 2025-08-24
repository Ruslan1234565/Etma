import JournalCard from "@/features/pages/journal/componets/jounal-card";
import Link from "next/link";
import { Episode } from "@/features/interface/journal";

interface ApiResponse {
  results: Episode[];
}

export default async function Journal() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/episode");
    
    if (!response.ok) {
      throw new Error('Failed to fetch episodes');
    }
    
    const data: ApiResponse = await response.json();

    return (
      <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>
          Rick and Morty Episodes
        </h1>
        
        <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
          All episodes from Rick and Morty show
        </p>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '20px' 
        }}>
          {data.results.map((episode: Episode) => (
            <Link href={`/journal/${episode.id}`} key={episode.id} style={{ textDecoration: 'none' }}>
              <JournalCard id={episode.id} />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch episodes:', error);
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          Rick and Morty Episodes
        </h1>
        <p style={{ color: 'red', fontSize: '18px' }}>
          Error loading episodes. Please try again later.
        </p>
      </div>
    );
  }
}
