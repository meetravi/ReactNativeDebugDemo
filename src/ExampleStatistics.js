// @flow

import React, { Component } from 'react';
import {
  LayoutAnimation,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

type Props = {
  onPressExit: Function,
}

type State = {
  aoPeople: number,
  aoLikes: number,
  aoShares: number,
  aoComments: number,
}

export default class ExampleStatistics extends Component <void, Props, State> {
  props: Props;

  state: State = {
    aoPeople: 0.5,
    aoLikes: 0.5,
    aoShares: 0.5,
    aoComments: 0.5,
  };

  componentDidMount() {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      this.setState({
        aoPeople: 3,
        aoLikes: 9,
        aoShares: 5,
        aoComments: 7,
      });
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.titleBar, styles.horizontal]}>
          <View style={styles.leftButtonView} />
          <View style={[styles.titleView, styles.center]}><Text style={styles.title}>STATISTICS</Text></View>
          <TouchableOpacity style={[styles.rightButton, styles.center]} onPress={() => this.props.onPressExit()}>
            <Text style={styles.rightButtonText}>×</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.scrollView}>
          <View style={[styles.cellView, styles.center]}>
            <View style={[styles.dateView, styles.center]}>
              <Text style={styles.dateText}>03.27-03.31</Text>
            </View>
          </View>

          { this._audienceOverview() }
          { this._visitors() }
        </ScrollView>
      </View>
    );
  }

  _audienceOverview() {
    return (
      <View style={[styles.cellView]}>
        <View style={[styles.cellViewTitleView, styles.audienceOverviewTitleView]}>
          <Text style={[styles.cellViewTitle, styles.audienceOverviewTitle]}>AUDIENCE OVERVIEW</Text>
        </View>
        <View style={styles.cellViewContent}>
          <View style={[styles.aoItemRow, styles.horizontal]}>
            <View style={styles.aoItemLeftCol}>
              <Text style={styles.aoItemText}>People</Text>
            </View>
            <View style={[styles.aoItemRightCol, styles.horizontal]}>
              <View style={[styles.aoItemValue, {flex: this.state.aoPeople}]}></View><View style={{flex: 10-this.state.aoPeople}}></View>
            </View>
          </View>
          <View style={[styles.aoItemRow, styles.horizontal]}>
            <View style={styles.aoItemLeftCol}>
              <Text style={styles.aoItemText}>Likes</Text>
            </View>
            <View style={[styles.aoItemRightCol, styles.horizontal]}>
              <View style={[styles.aoItemValue, {flex: this.state.aoLikes}]}></View><View style={{flex: 10-this.state.aoLikes}}></View>
            </View>
          </View>
          <View style={[styles.aoItemRow, styles.horizontal]}>
            <View style={styles.aoItemLeftCol}>
              <Text style={styles.aoItemText}>Shares</Text>
            </View>
            <View style={[styles.aoItemRightCol, styles.horizontal]}>
              <View style={[styles.aoItemValue, {flex: this.state.aoShares}]}></View><View style={{flex: 10-this.state.aoShares}}></View>
            </View>
          </View>
          <View style={[styles.aoItemRow, styles.horizontal]}>
            <View style={styles.aoItemLeftCol}>
              <Text style={styles.aoItemText}>Comments</Text>
            </View>
            <View style={[styles.aoItemRightCol, styles.horizontal]}>
              <View style={[styles.aoItemValue, {flex: this.state.aoComments}]}></View><View style={{flex: 10-this.state.aoComments}}></View>
            </View>
          </View>

          <View style={[styles.aoItemMarkerRow, styles.horizontal]}>
            <View style={styles.aoItemMarkerLeftCol}>
            </View>
            <View style={[styles.aoItemMarkerRightCol, styles.horizontal]}>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>0</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>100</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>200</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>300</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>400</Text>
              <Text style={[styles.aoItemMarkerCell, styles.aoItemMarkerCenter]}>500</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  _visitors() {
    return (
      <View style={[styles.cellView]}>
        <View style={[styles.cellViewTitleView, styles.visitorsTitleView]}>
          <Text style={[styles.cellViewTitle, styles.visitorsTitle]}>VISITORS</Text>
        </View>
        <View style={styles.cellViewContent}>
          <View style={[styles.visitorsBarRow, styles.horizontal]}>
            <View style={[styles.newVisitorsBar, styles.newVisitorsColor, {flex: 3}]}></View>
            <View style={[styles.returningVisitorsBar, styles.returningVisitorsColor, {flex: 7}]}></View>
          </View>
          <View style={[styles.visitorsInfoRow, styles.horizontal]}>
            <View style={styles.visitorsInfoCol}>
              <View style={styles.visitorsInfoNumberRow}><Text style={styles.visitorsInfoNumber}>21%</Text></View>
              <View style={[styles.visitorsInfoTextRow, styles.horizontal]}>
                <View style={[styles.visitorsInfoCircle, styles.newVisitorsColor]}></View>
                <Text style={styles.visitorsInfoText}>New visitors</Text>
              </View>
            </View>
            <View style={styles.visitorsInfoCol}>
            </View>
            <View style={styles.visitorsInfoCol}>
              <View style={styles.visitorsInfoNumberRow}><Text style={styles.visitorsInfoNumber}>79%</Text></View>
              <View style={[styles.visitorsInfoTextRow, styles.horizontal]}>
                <View style={[styles.visitorsInfoCircle, styles.returningVisitorsColor]}></View>
                <Text style={styles.visitorsInfoText}>Returning visitors</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A263A',
  },
  horizontal: {
    flexDirection: 'row',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleBar: {
    ...Platform.select({
      ios: {
        paddingTop: 20,
        height: 64,
      },
      android: {
        height: 50,
      },
    }),
  },
  leftButtonView: {
    flex: 2,
  },
  titleView: {
    flex: 8,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  rightButton: {
    flex: 2,
  },
  rightButtonText: {
    fontSize: 22,
    color: 'white',
  },

  scrollView: {
    flex: 1,
  },

  cellView: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  cellViewTitleView: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
  },
  cellViewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cellViewContent: {
    backgroundColor: '#0F3047',
    paddingTop: 12,
    paddingBottom: 10,
  },

  dateView: {
    height: 30,
    width: 120,
    borderRadius: 15,
    backgroundColor: '#10314B',
  },
  dateText: {
    fontSize: 14,
    color: '#7CD7DE',
  },

  audienceOverviewTitleView: {
    backgroundColor: '#27868F',
  },
  audienceOverviewTitle: {
    color: '#7CD7DE',
  },
  aoItemRow: {
    height: 24,
    paddingLeft: 12,
    paddingRight: 12,
  },
  aoItemLeftCol: {
    width: 100,
    justifyContent: 'center',
  },
  aoItemText: {
    color: '#6A8DA4',
  },
  aoItemRightCol: {
    flex: 1,
    backgroundColor: '#143D56',
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 6,
  },
  aoItemValue: {
    backgroundColor: '#5EBEC6',
    borderRadius: 6,
  },
  aoItemMarkerRow: {
  },
  aoItemMarkerLeftCol: {
    width: 90,
  },
  aoItemMarkerRightCol: {
    flex: 1,
  },
  aoItemMarkerCell: {
    flex: 1,
    color: '#6A8DA4',
  },
  aoItemMarkerCenter: {
    textAlign: 'center',
  },

  visitorsTitleView: {
    backgroundColor: '#E3D756',
  },
  visitorsTitle: {
    color: 'white',
  },
  visitorsBarRow: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
  },
  newVisitorsBar: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    height: 30,
  },
  returningVisitorsBar: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 30,
  },
  newVisitorsColor: {
    backgroundColor: '#F3F2C9',
  },
  returningVisitorsColor: {
    backgroundColor: '#E3D756',
  },

  visitorsInfoRow: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  visitorsInfoCol: {
    flex: 3,
    alignItems: 'center',
  },
  visitorsInfoNumber: {
    fontSize: 34,
    color: 'white',
  },
  visitorsInfoText: {
    color: '#6A8DA4',
  },
});
