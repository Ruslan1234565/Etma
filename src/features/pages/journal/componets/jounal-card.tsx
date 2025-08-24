import { Episode } from "@/features/interface/journal";

interface JournalCardProps {
  id: number;
}

export default async function JournalCard({ id }: JournalCardProps) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch episode');
    }
    
    const data: Episode = await response.json();

    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '15px',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        cursor: 'pointer'
      }}>
        <h3 style={{ 
          fontSize: '18px', 
          fontWeight: 'bold', 
          marginBottom: '10px',
          color: '#333'
        }}>
          {data.name}
        </h3>
        <p style={{ color: '#666', marginBottom: '5px' }}>
          <strong>Episode:</strong> {data.episode}
        </p>
        <p style={{ color: '#666', marginBottom: '5px' }}>
          <strong>Air Date:</strong> {data.air_date}
        </p>
        <p style={{ color: '#666', marginBottom: '5px' }}>
          <strong>Characters:</strong> {data.characters.length}
        </p>
        {data.url && (
          <p style={{ color: '#0066cc', fontSize: '12px', marginTop: '10px' }}>
            URL: {data.url}
          </p>
        )}
        {data.created && (
          <p style={{ color: '#999', fontSize: '12px', marginTop: '5px' }}>
            Created: {new Date(data.created).toLocaleDateString()}
          </p>
        )}
      </div>
    );
  } catch (error) {
    console.error(`Failed to fetch episode ${id}:`, error);
    return (
      <div style={{
        border: '1px solid #ffcccc',
        borderRadius: '8px',
        padding: '15px',
        backgroundColor: '#fff5f5'
      }}>
        <p style={{ color: '#cc0000' }}>Error loading episode {id}</p>
      </div>
    );
  }
}