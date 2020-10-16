import React from 'react';

export default function Loading({loaded}) {

    return !loaded && <div style={{
        width: '100%', 
        height: '100vh', 
        zIndex: 99999999999999999999, 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'fixed',
        backgroundColor: 'white'
        }}>
        Loading animation
    </div>
}