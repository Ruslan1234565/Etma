import { Episode } from "@/features/interface/journal";
import Link from "next/link";

interface JournalIdProps {
  params: { id: string };
}

export default async function JournalId({ params }: JournalIdProps) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${params.id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch episode');
    }
    
    const episode: Episode = await response.json();

    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <Link 
          href="/journal" 
          style={{ 
            display: 'inline-block',
            color: '#0066cc',
            textDecoration: 'none',
            marginBottom: '20px',
            fontSize: '16px'
          }}
        >
          ← Back
        </Link>
        
        <div style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            marginBottom: '20px',
            color: '#333'
          }}>
            {episode.name}
          </h1>
          
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Episode:</strong> {episode.episode}
            </p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Air Date:</strong> {episode.air_date}
            </p>
            <p style={{ fontSize: '16px', marginBottom: '10px' }}>
              <strong>Characters:</strong> {episode.characters.length} characters
            </p>
            {episode.url && (
              <p style={{ fontSize: '16px', marginBottom: '10px' }}>
                <strong>URL:</strong> 
                <a 
                  href={episode.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#0066cc', marginLeft: '5px' }}
                >
                  {episode.url}
                </a>
              </p>
            )}
            {episode.created && (
              <p style={{ fontSize: '16px', marginBottom: '10px' }}>
                <strong>Created:</strong> {new Date(episode.created).toLocaleDateString()}
              </p>
            )}
          </div>
          
          {episode.characters && episode.characters.length > 0 && (
            <div>
              <h2 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                marginBottom: '15px',
                color: '#333'
              }}>
                Characters in this Episode
              </h2>
              <p style={{ color: '#666', marginBottom: '15px' }}>
                This episode features {episode.characters.length} characters.
              </p>
              <div style={{
                backgroundColor: '#f5f5f5',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #ddd'
              }}>
                <p style={{ color: '#666', fontSize: '14px' }}>
                  Character details can be fetched from their individual URLs
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Failed to fetch episode:', error);
    return (
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <Link 
          href="/journal" 
          style={{ 
            display: 'inline-block',
            color: '#0066cc',
            textDecoration: 'none',
            marginBottom: '20px',
            fontSize: '16px'
          }}
        >
          ← Back to Episodes
        </Link>
        
        <div style={{
          border: '1px solid #ffcccc',
          borderRadius: '8px',
          padding: '20px',
          backgroundColor: '#fff5f5',
          textAlign: 'center'
        }}>
          <h1 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '15px',
            color: '#cc0000'
          }}>
            Episode Not Found
          </h1>
          <p style={{ color: '#cc0000', fontSize: '16px', marginBottom: '15px' }}>
            We couldn't find the episode you're looking for.
          </p>
          <Link 
            href="/journal"
            style={{
              backgroundColor: '#cc0000',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '5px',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Back to Episodes
          </Link>
        </div>
      </div>
    );
  }
}