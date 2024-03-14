def is_leap_year_normal(year):
    if year % 4 == 0:
        if year % 100 == 0:
            if year % 400 == 0:
                return True
            else:
                return False
        else:
            return True
    else:
        return False

# Test
print(is_leap_year_normal(2020))  # True
print(is_leap_year_normal(2021))  # False
