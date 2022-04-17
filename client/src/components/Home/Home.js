import { Container, Grow, Grid } from "@material-ui/core";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import useStyles from './styles'

const Home = () => {

   return ( <Grow in>
        <Container>

            <Grid className={classes.mainContainer} container justify="space-between"
                  alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                    <Posts setCurrentId = {setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Form currentId = { currenId } setCurrentId = {setCurrentId}/>
                </Grid>
            </Grid>
        </Container>
    </Grow>
   );
}

export default Home;