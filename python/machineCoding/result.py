from sklearn.linear_model import LinearRegression

hours = [[1], [2], [3], [4],[5],[6], [7],[8]]
result = [0,0,0,0,1,1,1,1]

model = LinearRegression()

model.fit(hours, result)

prediction = model.predict([[5]])

print("Prediction:", prediction)


sher = 12

print(sher)