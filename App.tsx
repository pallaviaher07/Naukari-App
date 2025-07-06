import { StyleSheet, ScrollView, Image, TextInput, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={{backgroundColor: 'grey' ,paddingBottom:70}}>
     <View style={styles.stickyHeader}>
          <TextInput
            placeholder='Search here for jobs.....'
            style={styles.input}
          />
        </View>
    <ScrollView  contentContainerStyle={{ paddingTop: 30 }}>
      <View style={styles.container1}>
       

        <Text style={styles.text}> Make the most of DlifeJob by creating your job profile</Text>
        <Text style={styles.textb}> <Image style={{ width: 20, height: 20, marginTop: 10 }}
          source={{ uri: "https://images.template.net/74059/Shining-Gold-Star-Vector-1.jpg" }} /> Get discovered directly by recruiters
        </Text>
        <Text style={styles.texts}> Recruiters will not post a job 70% of the time</Text>
        <Text style={styles.textb}> <Image style={{ width: 20, height: 20, marginTop: 10 }}
          source={{ uri: "https://images.template.net/74059/Shining-Gold-Star-Vector-1.jpg" }} />Find relevant job recommendations
        </Text>
        <Text style={styles.texts}>Relevance is better for complete profiles</Text>
        <View style={{ flex: 1, flexDirection: 'row' }} >
          <View >
            <Pressable style={styles.btn}>
              <Text style={styles.btntext}>Register</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.btn2}>
              <Text style={styles.btntext2}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.container2}>
        <Image style={{ height: 200, width: 200, marginLeft: 60 }}
          source={{ uri: "https://www.shutterstock.com/shutterstock/videos/3786241779/thumb/1.jpg?ip=x480" }} />
        <Text style={{ color: 'white', fontWeight: '900', fontSize: 20, textAlign: 'center' }}>Find Your Dream Job</Text>
        <TextInput style={styles.Tinput}
          placeholder='Enter skill,designation,comoanies' />
        <TextInput style={styles.Tinput}
          placeholder='Enter location' />
        <TouchableOpacity style={styles.searchbtn}>
          <Text style={styles.btntext}>Search jobs</Text>
        </TouchableOpacity>

        <View style={styles.container3}>

          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#6B7280' }}> 70% hiring happens without any jobs post</Text>
          <Text style={{ fontSize: 15, color: '#6B7280', marginTop: 10 }} > Top companies on Naukari are hiring by directly reaching out to jobseekers without posting a job.Learn hot you can make the best of this opportunity</Text>
          <Text style={{ color: '#3B82F6', marginTop: 5 }}>Learn more</Text>
        </View>


      </View>

    </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
   stickyHeader: {
   
    backgroundColor: 'black',
   
    paddingVertical: 10,
    paddingHorizontal:1
  },
  input: {
    height: 50,
    width: 300,
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 2,
    padding: 5,
    marginTop: 40,
    marginLeft: 45,



  },
  text: {
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 35,
    fontSize: 20,
    color: 'white',
    fontStyle: 'normal'
  },
  textb: {
    fontSize: 15,
    marginLeft: 35,
    color: 'white',
    marginTop: 20,
    fontWeight: 500
  },
  texts: {
    fontSize: 13,
    color: 'grey',
    marginTop: 5,
    marginLeft: 57,
  },
  btn: {
    backgroundColor: 'orange',
    width: 100,
    height: 40,
    borderRadius: 30,
    padding: 10,
    marginTop: 30,
    marginLeft: 50
  },
  btntext: {
    color: 'white',
    fontWeight: '600',


  },
  btntext2: {
    color: 'blue',
    fontWeight: '600',


  },
  btn2: {
    width: 100,
    height: 40,
    borderRadius: 30,
    paddingInline: 25,
    paddingVertical: 7,
    marginTop: 30,
    marginLeft: 20,
    borderWidth: 2,
    borderColor: 'blue',

  },
  container1: {
    backgroundColor: 'black',

    paddingBottom: 30


  },
  container2: {
    backgroundColor: 'black',
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black'

  },

  Tinput: {
    marginLeft: 40,

  },
  searchbtn: {
    backgroundColor: '#3B82F6',
    width: 100,
    height: 40,
    borderRadius: 30,
    padding: 10,
    marginTop: 30,
    marginLeft: 120
  },
  container3: {
    borderRadius: 50,
    backgroundColor: '#18181B',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 50,
    marginTop: 30,

  }
}
)
