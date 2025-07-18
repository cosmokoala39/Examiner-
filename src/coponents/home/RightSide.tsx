import React from 'react';
import latestNewsData from '../../../public/data/latestNews.json';

const RightSide = () => {
  return (
    <div>
      {/* 📢 Advertisement ABOVE Latest News */}
      <div
        style={{
          height: '300px',
          backgroundColor: '#f7f9f9ff',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          color: "black"
        }}
      >
        Advertisement
      </div>
      <hr/>

      <h5
        style={{
          fontWeight: 'bold',
         
          paddingBottom: '8px',
          marginBottom: '12px',
        }}
      >
        Latest News
      </h5>

      <div>
        {latestNewsData.map((item, index) => (
          <React.Fragment key={index}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
              <div style={{ flex: 1 }}>
                {item.badge && (
                  <span
                    style={{
                      backgroundColor: '#eee',
                      padding: '2px 6px',
                      fontSize: '12px',
                      marginBottom: '4px',
                      display: 'inline-block',
                    }}
                  >
                    {item.badge}
                  </span>
                )}
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{item.title}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {item.authors} · {item.time}
                </div>
              </div>
              <img
                src={item.img}
                alt="news"
                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '4px' }}
              />
            </div>

            {/* Divider below each item except last */}
            {index !== latestNewsData.length - 1 && (
              <div style={{ borderBottom: '1px solid #ddd', marginBottom: '16px' }} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* 📢 Advertisement BELOW Latest News */}
      <div
       style={{
          height: '300px',
           backgroundColor: '#fafcfdff',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          color:"black"
        }}
      >
        Advertisement
      </div>
    </div>
  );
};

export default RightSide;
