import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '400px',
    },
    profile: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '400px',
    },
    userName: {
        display: 'flex',
        alignItems: 'center',
    },
    brandContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));