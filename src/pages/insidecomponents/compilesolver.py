import math

# Function to convert time units
def convert_time():
    time_factors = {
        'second': 1,
        'minute': 60,
        'hour': 3600,
        'day': 86400,
        'week': 604800,  
        'year': 31536000,  
    }

    unit_aliases = {
        'seconds': 'second',
        'minutes': 'minute',
        'hours': 'hour',
        'days': 'day',
        'weeks': 'week',
        'years': 'year',
    }

    value_str = input("Enter the time value: ")
    source_unit = input("Enter the source unit (e.g., seconds, minutes, hours, days, weeks, years): ")
    target_unit = input("Enter the target unit (e.g., seconds, minutes, hours, days, weeks, years): ")

    try:
        value = float(value_str)
    except ValueError:
        print("Invalid input. Please enter a valid number.")
        return

    try:
        source_unit = unit_aliases.get(source_unit.lower(), source_unit)
        target_unit = unit_aliases.get(target_unit.lower(), target_unit)
        value_in_seconds = value * time_factors[source_unit]

        print("\nStep 1: Conversion Factors")
        print(f"  1 {source_unit} = {time_factors[source_unit]} seconds")

        converted_value = value_in_seconds / time_factors[target_unit]

        print("\nStep 2: Convert {} {} to {}".format(value, source_unit, target_unit))
        print(f"  {value_in_seconds} seconds / {time_factors[target_unit]} = {converted_value} {target_unit}")

        print(f"\n{value} {source_unit} is equal to {converted_value} {target_unit}")

    except KeyError as e:
        print(f"Error: Invalid time unit - {e}")

# Function to calculate speed, time, or distance
def speed_time_distance():
    print("Choose what you want to calculate:")
    print("1. Distance (d)")
    print("2. Speed (s)")
    print("3. Time (t)")

    choice = input("Enter the number of your choice: ")

    if choice not in ['1', '2', '3']:
        print("Invalid choice. Please enter a valid number.")
        return

    if choice == '1':
        calculate_distance()
    elif choice == '2':
        calculate_speed()
    elif choice == '3':
        calculate_time()

# Function to calculate distance
def calculate_distance():
    speed_str = input("Enter the speed (s): ")
    time_str = input("Enter the time (t): ")

    try:
        speed = float(speed_str)
        time = float(time_str)
    except ValueError:
        print("Invalid input. Please enter valid numbers.")
        return

    distance = speed * time

    print("\nStep 1: Formula")
    print("   Distance (d) = Speed (s) * Time (t)")

    print("\nStep 2: Substitute Values")
    print(f"   Distance (d) = {speed} * {time}")

    print("\nStep 3: Calculate")
    print(f"   Distance (d) = {distance}")

    print(f"\nThe distance is {distance}.")

# Function to calculate speed
def calculate_speed():
    distance_str = input("Enter the distance (d): ")
    time_str = input("Enter the time (t): ")

    try:
        distance = float(distance_str)
        time = float(time_str)
    except ValueError:
        print("Invalid input. Please enter valid numbers.")
        return

    speed = distance / time

    print("\nStep 1: Formula")
    print("   Speed (s) = Distance (d) / Time (t)")

    print("\nStep 2: Substitute Values")
    print(f"   Speed (s) = {distance} / {time}")

    print("\nStep 3: Calculate")
    print(f"   Speed (s) = {speed}")

    print(f"\nThe speed is {speed}.")

# Function to calculate time
def calculate_time():
    distance_str = input("Enter the distance (d): ")
    speed_str = input("Enter the speed (s): ")

    try:
        distance = float(distance_str)
        speed = float(speed_str)
    except ValueError:
        print("Invalid input. Please enter valid numbers.")
        return

    time = distance / speed

    print("\nStep 1: Formula")
    print("   Time (t) = Distance (d) / Speed (s)")

    print("\nStep 2: Substitute Values")
    print(f"   Time (t) = {distance} / {speed}")

    print("\nStep 3: Calculate")
    print(f"   Time (t) = {time}")

    print(f"\nThe time is {time}.")

# Function to calculate perimeter of shapes
def perimeter_of_Shapes():
    print("Choose a shape to calculate perimeter:")
    print("1. Rectangle")
    print("2. Square")
    print("3. Circle")
    print("4. Triangle")
    print("5. Polygon")

    choice = input("Enter the number of your choice: ")

    if choice == '1':
        length = float(input("Enter the length of the rectangle: "))
        width = float(input("Enter the width of the rectangle: "))
        perimeter = calculate_rectangle_perimeter(length, width)
        display_solution("rectangle", {'length': length, 'width': width}, "2 * (length + width)", f"2 * ({length} + {width})", perimeter)
    elif choice == '2':
        side = float(input("Enter the side length of the square: "))
        perimeter = calculate_square_perimeter(side)
        display_solution("square", {'side': side}, "4 * side", f"4 * {side}", perimeter)
    elif choice == '3':
        calculate_circle_perimeter()
    elif choice == '4':
        side1 = float(input("Enter the length of side 1: "))
        side2 = float(input("Enter the length of side 2: "))
        side3 = float(input("Enter the length of side 3: "))
        perimeter = calculate_triangle_perimeter(side1, side2, side3)
        display_solution("triangle", {'side1': side1, 'side2': side2, 'side3': side3}, "side1 + side2 + side3", f"{side1} + {side2} + {side3}", perimeter)
    elif choice == '5':
        num_sides = int(input("Enter the number of sides in the polygon: "))
        side_lengths = [float(input(f"Enter the length of side {i + 1}: ")) for i in range(num_sides)]
        perimeter = calculate_polygon_perimeter(num_sides, side_lengths)
        display_solution("polygon", {'num_sides': num_sides, 'side_lengths': side_lengths}, "Sum of all side lengths", f"{' + '.join(map(str, side_lengths))}", perimeter)
        display_polygon_solution(num_sides, side_lengths)
    else:
        print("Invalid choice. Please enter a valid number.")

# Function to calculate perimeter of a rectangle
def calculate_rectangle_perimeter(length, width):
    perimeter = 2 * (length + width)
    return perimeter

# Function to calculate perimeter of a square
def calculate_square_perimeter(side):
    perimeter = 4 * side
    return perimeter

# Function to calculate perimeter of a circle
def calculate_circle_perimeter():
    print("Choose the input type for the circle:")
    print("1. Radius")
    print("2. Diameter")
    circle_input_choice = input("Enter the number of your choice: ")

    if circle_input_choice == '1':
        radius = float(input("Enter the radius of the circle: "))
        perimeter = calculate_circle_perimeter_value(radius)
        display_solution("circle", {'radius': radius}, "2 * π * radius", f"2 * π * {radius}", perimeter)
    elif circle_input_choice == '2':
        diameter = float(input("Enter the diameter of the circle: "))
        radius = diameter / 2
        perimeter = calculate_circle_perimeter_value(radius)
        display_solution("circle", {'diameter': diameter}, "2 * π * (diameter / 2)", f"2 * π * ({diameter} / 2)", perimeter)
    else:
        print("Invalid choice. Please enter a valid number.")

# Function to calculate perimeter of a circle given its radius
def calculate_circle_perimeter_value(radius):
    perimeter = 2 * math.pi * radius
    return perimeter

# Function to calculate perimeter of a triangle
def calculate_triangle_perimeter(side1, side2, side3):
    perimeter = side1 + side2 + side3
    return perimeter

# Function to calculate perimeter of a polygon
def calculate_polygon_perimeter(num_sides, side_lengths):
    perimeter = sum(side_lengths)
    return perimeter

# Function to display step-by-step solution for polygon perimeter
def display_polygon_solution(num_sides, side_lengths):
    print("\nStep-by-Step Solution:")
    for i in range(num_sides):
        print(f"   • Side {i + 1}: {side_lengths[i]}")
    print("\nStep 1: Add all side lengths")
    print(f"   Perimeter = {'+'.join(map(str, side_lengths))}")
    print(f"   Perimeter = {calculate_polygon_perimeter(num_sides, side_lengths)}")

# Function to calculate area of a square
def calculate_square_area(side):
    area = side**2
    return area

# Function to calculate area of a rectangle
def calculate_rectangle_area(length, width):
    area = length * width
    return area

# Function to calculate area of a triangle
def calculate_triangle_area(base, height):
    area = 0.5 * base * height
    return area

# Function to calculate area of a circle
def calculate_circle_area(radius):
    area = math.pi * radius**2
    return area

# Function to calculate area of a semi-circle
def calculate_semi_circle_area(radius):
    area = 0.5 * math.pi * radius**2
    return area

# Function to calculate area of plane figures
def area_of_plane_figures():
    print("Choose a shape to calculate area:")
    print("1. Square")
    print("2. Rectangle")
    print("3. Triangle")
    print("4. Circle")
    print("5. Semi-circle")

    choice = input("Enter the number of your choice: ")

    if choice == '1':
        side = float(input("Enter the side length of the square: "))
        area = calculate_square_area(side)
        display_solution("square", {'side': side}, "side^2", f"{side}^2", area)
    elif choice == '2':
        length = float(input("Enter the length of the rectangle: "))
        width = float(input("Enter the width of the rectangle: "))
        area = calculate_rectangle_area(length, width)
        display_solution("rectangle", {'length': length, 'width': width}, "length * width", f"{length} * {width}", area)
    elif choice == '3':
        base = float(input("Enter the base length of the triangle: "))
        height = float(input("Enter the height of the triangle: "))
        area = calculate_triangle_area(base, height)
        display_solution("triangle", {'base': base, 'height': height}, "0.5 * base * height", f"0.5 * {base} * {height}", area)
    elif choice == '4':
        calculate_circle_area_display()
    elif choice == '5':
        calculate_semi_circle_area_display()
    else:
        print("Invalid choice. Please enter a valid number.")

# Function to calculate area of a circle and display step-by-step solution
def calculate_circle_area_display():
    input_type = input("Choose the input type for the circle (1. Radius / 2. Diameter): ")
    if input_type == '1':
        radius = float(input("Enter the radius of the circle: "))
    elif input_type == '2':
        diameter = float(input("Enter the diameter of the circle: "))
        radius = diameter / 2
        print("\nTo get the radius from the diameter:")
        print(f"   Radius = Diameter / 2 = {diameter} / 2 = {radius}")
    else:
        print("Invalid choice. Please enter 1 or 2.")
        return
    area = calculate_circle_area(radius)
    display_solution("circle", {'radius': radius}, "π * radius^2", f"π * {radius}^2", area)

# Function to calculate area of a semi-circle and display step-by-step solution
def calculate_semi_circle_area_display():
    input_type = input("Choose the input type for the semi-circle (1. Radius / 2. Diameter): ")
    if input_type == '1':
        radius = float(input("Enter the radius of the semi-circle: "))
    elif input_type == '2':
        diameter = float(input("Enter the diameter of the semi-circle: "))
        radius = diameter / 2
        print("\nTo get the radius from the diameter:")
        print(f"   Radius = Diameter / 2 = {diameter} / 2 = {radius}")
    else:
        print("Invalid choice. Please enter 1 or 2.")
        return
    area = calculate_semi_circle_area(radius)
    display_solution("semi-circle", {'radius': radius}, "0.5 * π * radius^2", f"0.5 * π * {radius}^2", area)

# Function to calculate volume of a cube
def calculate_cube_volume(side):
    volume = side**3
    return volume

# Function to calculate volume of a rectangular prism
def calculate_rectangular_prism_volume(length, width, height):
    volume = length * width * height
    return volume

# Function to calculate volume of a sphere
def calculate_sphere_volume(radius_or_diameter, is_diameter=False):
    radius = radius_or_diameter / 2 if is_diameter else radius_or_diameter
    volume = (4/3) * math.pi * radius**3
    return volume

# Function to calculate volume of a cylinder
def calculate_cylinder_volume(radius_or_diameter, height, is_diameter=False):
    radius = radius_or_diameter / 2 if is_diameter else radius_or_diameter
    volume = math.pi * radius**2 * height
    return volume

# Function to calculate volume of a rectangular pyramid
def calculate_rectangular_pyramid_volume(base_length, base_width, height):
    volume = (1/3) * base_length * base_width * height
    return volume

# Function to calculate volume of a cone
def calculate_cone_volume(radius_or_diameter, height, is_diameter=False):
    radius = radius_or_diameter / 2 if is_diameter else radius_or_diameter
    volume = (1/3) * math.pi * radius**2 * height
    return volume

# Function to calculate volume
def volume():
    print("Choose a 3D shape to calculate volume:")
    print("1. Cube")
    print("2. Rectangular Prism")
    print("3. Sphere")
    print("4. Cylinder")
    print("5. Rectangular Pyramid")
    print("6. Cone")

    choice = input("Enter the number of your choice: ")

    if choice == '1':
        side = float(input("Enter the side length of the cube: "))
        volume = calculate_cube_volume(side)
        display_solution("cube", {'side': side}, "side^3", f"{side}^3", volume)
    elif choice == '2':
        length = float(input("Enter the length of the rectangular prism: "))
        width = float(input("Enter the width of the rectangular prism: "))
        height = float(input("Enter the height of the rectangular prism: "))
        volume = calculate_rectangular_prism_volume(length, width, height)
        display_solution("rectangular prism", {'length': length, 'width': width, 'height': height},
                         "length * width * height", f"{length} * {width} * {height}", volume)
    elif choice == '3':
        is_diameter = input("Do you want to enter the radius or diameter? (r/d): ").lower() == 'd'
        radius_or_diameter = float(input(f"Enter the {'diameter' if is_diameter else 'radius'} of the sphere: "))
        volume = calculate_sphere_volume(radius_or_diameter, is_diameter)
        display_solution("sphere", {'radius_or_diameter': radius_or_diameter, 'is_diameter': is_diameter},
                         "(4/3) * π * radius^3", f"(4/3) * π * ({radius_or_diameter}/2)^3", volume)
    elif choice == '4':
        is_diameter = input("Do you want to enter the radius or diameter? (r/d): ").lower() == 'd'
        radius_or_diameter = float(input(f"Enter the {'diameter' if is_diameter else 'radius'} of the cylinder: "))
        height = float(input("Enter the height of the cylinder: "))
        volume = calculate_cylinder_volume(radius_or_diameter, height, is_diameter)
        display_solution("cylinder", {'radius_or_diameter': radius_or_diameter, 'height': height, 'is_diameter': is_diameter},
                         "π * radius^2 * height", f"π * ({radius_or_diameter}/2)^2 * {height}", volume)
    elif choice == '5':
        base_length = float(input("Enter the base length of the pyramid: "))
        base_width = float(input("Enter the base width of the pyramid: "))
        height = float(input("Enter the height of the pyramid: "))
        volume = calculate_rectangular_pyramid_volume(base_length, base_width, height)
        display_solution("rectangular pyramid", {'base_length': base_length, 'base_width': base_width, 'height': height},
                         "(1/3) * base_length * base_width * height", f"(1/3) * {base_length} * {base_width} * {height}", volume)
    elif choice == '6':
        is_diameter = input("Do you want to enter the radius or diameter? (r/d): ").lower() == 'd'
        radius_or_diameter = float(input(f"Enter the {'diameter' if is_diameter else 'radius'} of the cone: "))
        height = float(input("Enter the height of the cone: "))
        volume = calculate_cone_volume(radius_or_diameter, height, is_diameter)
        display_solution("cone", {'radius_or_diameter': radius_or_diameter, 'height': height, 'is_diameter': is_diameter},
                         "(1/3) * π * radius^2 * height", f"(1/3) * π * ({radius_or_diameter}/2)^2 * {height}", volume)
    else:
        print("Invalid choice. Please enter a valid number.")

# Function to convert temperature from Celsius to Fahrenheit
def celsius_to_fahrenheit(celsius):
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit

# Function to convert temperature from Celsius to Kelvin
def celsius_to_kelvin(celsius):
    kelvin = celsius + 273.15
    return kelvin

# Function to convert temperature from Fahrenheit to Celsius
def fahrenheit_to_celsius(fahrenheit):
    celsius = (fahrenheit - 32) * 5/9
    return celsius

# Function to convert temperature from Fahrenheit to Kelvin
def fahrenheit_to_kelvin(fahrenheit):
    kelvin = (fahrenheit + 459.67) * 5/9
    return kelvin

# Function to convert temperature from Kelvin to Celsius
def kelvin_to_celsius(kelvin):
    celsius = kelvin - 273.15
    return celsius

# Function to convert temperature from Kelvin to Fahrenheit
def kelvin_to_fahrenheit(kelvin):
    fahrenheit = (kelvin * 9/5) - 459.67
    return fahrenheit

# Function for temperature conversion
def temperature_conversion():
    print("Choose the source temperature unit:")
    print("1. Celsius")
    print("2. Fahrenheit")
    print("3. Kelvin")

    source_choice = input("Enter the number of Temperature Units Given: ")

    print("\nChoose the target temperature unit:")
    print("1. Celsius")
    print("2. Fahrenheit")
    print("3. Kelvin")

    target_choice = input("Enter the number of temperature units you want to convert: ")

    source_value = float(input("Enter the given temperature value: "))

    if source_choice == "1":
        source_unit = "Celsius"
        if target_choice == "1":
            target_unit = "Celsius"
            target_value = source_value
            formula = "source"
        elif target_choice == "2":
            target_unit = "Fahrenheit"
            target_value = celsius_to_fahrenheit(source_value)
            formula = "(source * 9/5) + 32"
        elif target_choice == "3":
            target_unit = "Kelvin"
            target_value = celsius_to_kelvin(source_value)
            formula = "source + 273.15"
    elif source_choice == "2":
        source_unit = "Fahrenheit"
        if target_choice == "1":
            target_unit = "Celsius"
            target_value = fahrenheit_to_celsius(source_value)
            formula = "(source - 32) * 5/9"
        elif target_choice == "2":
            target_unit = "Fahrenheit"
            target_value = source_value
            formula = "source"
        elif target_choice == "3":
            target_unit = "Kelvin"
            target_value = fahrenheit_to_kelvin(source_value)
            formula = "(source + 459.67) * 5/9"
    elif source_choice == "3":
        source_unit = "Kelvin"
        if target_choice == "1":
            target_unit = "Celsius"
            target_value = kelvin_to_celsius(source_value)
            formula = "source - 273.15"
        elif target_choice == "2":
            target_unit = "Fahrenheit"
            target_value = kelvin_to_fahrenheit(source_value)
            formula = "(source * 9/5) - 459.67"
        elif target_choice == "3":
            target_unit = "Kelvin"
            target_value = source_value
            formula = "source"

    display_temperature_solution(source_value, source_unit, target_value, target_unit, formula)

# Function to display step-by-step solution for temperature conversion
def display_temperature_solution(source_value, source_unit, target_value, target_unit, formula):
    print("\nStep-by-Step Solution:")
    print(f"Step 1: Convert {source_value} {source_unit} to {target_unit}")
    print(f"   Target Value = {formula}")
    print(f"   Target Value = {target_value}")

# Function to display the solution of a calculation
def display_solution(shape, values, formula, substituted_formula, result):
    print("\nStep-by-Step Solution:")
    for key, value in values.items():
        print(f"   • {key.capitalize()}: {value}")
    print(f"\nStep 1: Use the formula for calculating the {shape.capitalize()} {formula}")
    print(f"   {shape.capitalize()} = {substituted_formula}")
    print(f"   {shape.capitalize()} = {result}")

# Main function to select the type of calculation
def main():
    print("Select the type of calculation:")
    print("1. Convert Time Units")
    print("2. Speed, Time, or Distance")
    print("3. Perimeter of Shapes")
    print("4. Area of Plane Figures")
    print("5. Volume")
    print("6. Temperature Conversion")

    choice = input("Enter the number of your choice: ")

    if choice == '1':
        convert_time()
    elif choice == '2':
        speed_time_distance()
    elif choice == '3':
        perimeter_of_Shapes()
    elif choice == '4':
        area_of_plane_figures()
    elif choice == '5':
        volume()
    elif choice == '6':
        temperature_conversion()
    else:
        print("Invalid choice. Please enter a valid number.")


if __name__ == "__main__":
    main()
