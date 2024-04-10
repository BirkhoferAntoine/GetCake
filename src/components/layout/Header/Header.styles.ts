export const sxStyles = {
    appBar: {
        background: 'transparent',
        boxShadow: 'none'
    },
    logoContainer: {
        border: '2px solid var(--yellow)',
        background: 'var(--color-primary)',
        borderRadius: '50%',
        outline: '2px solid var(--color-primary)',
        padding: '6px 6px',
        '& img': {
            marginTop: '-10px',
            height: '48px'
        }
    },
    logoText: {
        paddingLeft: '6px',
        '& *':
            {
                color: 'var(--color-primary)',
                fontWeight: 'bolder',
                underline: 'true'
            }
    }
}