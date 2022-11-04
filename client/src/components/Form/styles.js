import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'

},
    form: {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',

    },
    formTitle: {
        fontWeight: 'bold'

    },
   /* fileInput: {
        width: '97%',
        margin: '10px 0',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },*/
    buttonSubmit: {
        marginBottom: 10,
        background: 'black',
        color: 'white',
        "&:hover": {
            background: "#363636"
        },

    },

    /*________________*/

    fileContainer: {
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        zIndex: '300',
    },

    fileInput: {
        position: 'absolute',
        zIndex: '-1',
        // visibility: 'hidden',
        top: '10px',
        left: '8px',
        fontSize: '17px',
        color: '#b8b8b8',
        marginLeft: 42,
        cursor: 'pointer'
    },

    buttonWrap: {
        position: 'relative',
    },

    button: {
        display: 'inline-block',
        cursor: 'pointer',
        backgroundColor: '#3bafda',
        "&:hover": {
            background: "#7dcae6"
        },
        color: 'white',
        marginBottom: 10,
    },

    attachFile: {
        fontSize: '17px',
    },

    /*DARK MODE FOR FORM*/

    darkForm: {
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        background: 'rgba(10,7,14)',

    },
    darkFormTitle: {
        color: 'rgba(252,252,252,255)',
        fontWeight: 'bold',

    },

    darkPaper: {
        padding: theme.spacing(2),
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        background: 'rgba(35,34,40)',
        color:'white'

    },


    darkTextFieldCreator: {
        color: 'white'
    },
    darkTextFieldCreatorLabel: {

        color: '#bcbcbc',
        "&.Mui-focused": {
            color: '#bcbcbc'
        },
    },

    darkTextFieldTitle: {
        color: 'white'
    },
    darkTextFieldTitleLabel: {

        color: '#bcbcbc',
        "&.Mui-focused": {
            color: '#bcbcbc'
        },
    },

    darkTextFieldMessage: {
        color: 'white'
    },
    darkTextFieldMessageLabel: {

        color: '#bcbcbc',
        "&.Mui-focused": {
            color: '#bcbcbc'
        },
    },

    darkTextFieldTags: {
        color: 'white'
    },
    darkTextFieldTagsLabel: {

        color: '#bcbcbc',
        "&.Mui-focused": {
            color: '#bcbcbc'
        },
    }
}));