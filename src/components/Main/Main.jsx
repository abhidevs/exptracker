import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'
import { ExpenseTrackerContext } from '../../context/context'
import InfoCard from './InfoCard/InfoCard'
import logo from '../../assets/logo.png'

const Main = () => {
    const classes = useStyles()
    const { balance } = useContext(ExpenseTrackerContext)

    return (
        <Card className={classes.root}>
            
            <CardHeader title={
                <div>
                    <img src={logo} alt="logo" height="30"/>
                    <span>Expense Tracker</span>
                </div>
            } subheader="Powered by Voice" />
            <CardContent className={classes.cardContent}>
                <Typography align="center" variant="h6">Total Balance ${balance}</Typography>
                <Typography variant="subtitle2" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    <InfoCard />
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>

            <CardContent className={classes.CardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
