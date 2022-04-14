import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    media: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        backgroundBlendMode: 'color',
    },
    border: {
        border: 'solid',
    },
    fullHeightCard: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative',
        // boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',

},
    overlay: {
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
    },
    overlay2: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: 'white',
    },
    grid: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    title: {
        padding: '0 16px',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    message: {
        fontSize: '20px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    cardActions: {
        padding: '0 16px 8px 16px',
        display: 'flex',
        justifyContent: 'space-between',
    },
    like: {

        color: 'black',
    },

    delete: {

        color: '#d42850',
    },
});