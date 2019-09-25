import React from 'react'
import {Text} from 'react-native'
import { useQuery } from '@apollo/react-hooks';

import styles from './application-list-styles'
import queries from './application-list-queries'

const ApplicationList = () => {
  const { loading, error, data } = useQuery(queries.APPICAIONS_QUERY);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error! ${error.message}</Text>

  const {allApplications} = data

  if (!allApplications) return <Text>Query does not work</Text>;

  console.log("allApplications", allApplications) 

  return <Text>HAHAHA</Text>
}

export default ApplicationList