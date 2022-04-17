import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // background : 'rgba(22, 22, 51, 0.9)',
        background: 'rgba(252,252,252,255)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',

    },
    heading: {
        // color: 'rgba(22, 22, 51, 0.1)',
        fontWeight: 'bold'
    },
    image: {
        marginLeft: '15px',
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse"
        }
    },

    /*DRAK OPTIONS*/

    darkAppBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // background : 'rgba(22, 22, 51, 0.9)',
        background: 'rgba(10,7,14)',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',

    },
    darkHeading: {
        color: 'rgba(252,252,252,255)',
        fontWeight: 'bold'
    },

}));