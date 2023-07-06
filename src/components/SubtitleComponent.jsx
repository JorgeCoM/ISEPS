export const SubtitleComponent = ({title}) => {
    return (
      <div style={{ 
          borderBottom: '2px solid #000', 
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '20px',
          width: '50%',
          padding: '5px 0'
      }}>
        <h2>{title}</h2>
        <div style={{
            borderBottom: '2px solid #000',
            width: '50%',
        }}/>
      </div>
    )
  }
  