import React from 'react';

export default function Loading({loaded}) {

    return !loaded && <div style={{
        width: '100%', 
        height: '100%', 
        zIndex: 99999999999999999999, 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'none',
        position: 'absolute',
        backgroundColor: 'white'
        }}>
        Loading animation
    </div>
}