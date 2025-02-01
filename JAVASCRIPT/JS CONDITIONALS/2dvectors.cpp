#include<iostream>
#include<string>
#include<vector>

using namespace std;
int main(){
    vector<vector<int>>vec(3,vector<int>(3,10));
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            cout<<vec[i][j]<<" ";
        }
        cout<<endl;
        
    }
    
    return 0;
}