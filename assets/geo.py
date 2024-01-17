from manim import *
config.media_width = "100%"

class MyScene(Scene):
    def construct(self):
        circle = Circle(radius=2.0, color=BLUE)
        square = Square(side_length=2.0, color=RED)
        triangle = Polygon(np.array([-1, 0, 0]), np.array([1, 0, 0]), np.array([0, 2, 0]), color=GREEN)

        circle.set_fill(BLUE, opacity=0.5)
        square.set_fill(RED, opacity=0.5)
        triangle.set_fill(GREEN, opacity=0.5)

        circle.move_to(ORIGIN)
        square.move_to(ORIGIN)
        triangle.move_to(ORIGIN)

        self.play(Create(circle), Create(square), Create(triangle))

        self.play(
            square.animate.shift(1.5*UP + 1.5*RIGHT),
            triangle.animate.shift(1.5*RIGHT),
        )

        self.wait(7)
        self.play(FadeOut(circle), FadeOut(square), FadeOut(triangle))

class EuclidScene(Scene):
    def construct(self):
        radius=3.0
        circle_A = Circle(radius=radius, color=BLUE)
        circle_B = Circle(radius=radius, color=RED)
        circle_A.set_fill(BLUE, opacity=0.5)
        circle_B.set_fill(RED, opacity=0.5)
        circle_A.move_to(ORIGIN)
        circle_B.move_to(ORIGIN)

        self.play(Create(circle_A))
        self.play(circle_A.animate.shift(1.5*LEFT))
        self.play(Create(circle_B))
        self.play(circle_B.animate.shift(1.5*RIGHT))
        
        intersection = circle_A.point_from_proportion(1/6)
        vertices = np.array([[-1.5,0,0], intersection, [1.5,0,0]])
        triangle = Polygon(*vertices, color=PURPLE)
        triangle.set_fill(PURPLE, opacity=0.8)
        
        label_A = MathTex(r"A").next_to(vertices[0], direction=LEFT)
        label_B = MathTex(r"B").next_to(vertices[2], direction=RIGHT)
        label_GAMMA = MathTex(r"\Gamma").next_to(vertices[1], direction=UP)
        label_DELTA = MathTex(r"\Delta").next_to([-4.5,0,0], direction=RIGHT)
        label_EPSILON = MathTex(r"E").next_to([4.5,0,0], direction=LEFT)
        
        self.play(Create(triangle), Write(label_A), Write(label_B), 
                  Write(label_GAMMA), Write(label_DELTA), Write(label_EPSILON))

        self.wait(10)
        self.play(FadeOut(circle_A), FadeOut(circle_B), FadeOut(triangle), 
                  FadeOut(label_A), FadeOut(label_B), 
                  FadeOut(label_GAMMA), FadeOut(label_DELTA), FadeOut(label_EPSILON))

class MyCircle(Scene):
    def construct(self):
        circle = Circle(radius=3.0, color=BLUE)
        circle.set_fill(BLUE, opacity=0.5)
        
        dots = np.array([[0, 0, 0], [3, 0, 0]])
        r = Line(dots[0], dots[1])
        
        label_O = MathTex(r"O").next_to(dots[0], DOWN)
        label_A = MathTex(r"A").next_to(dots[1], RIGHT+DOWN)
        
        mid_OA = (dots[0]+dots[1])/2
        label_r = MathTex(r"r").next_to(mid_OA, direction=DOWN, buff=0.25)
        
        self.play(Create(circle))
        self.play(Create(r), Write(label_A), Write(label_O), Write(label_r))
        self.wait(30)
        self.play(FadeOut(circle), FadeOut(r), FadeOut(label_A), FadeOut(label_O), FadeOut(label_r))
        
class MyCircle_line(Scene):
    def construct(self):
        circle = Circle(radius=3.0, color=BLUE)
        
        dots = np.array([[0, 0, 0], [3, 0, 0]])
        r = Line(dots[0], dots[1])
        
        label_O = MathTex(r"O").next_to(dots[0], DOWN)
        label_A = MathTex(r"A").next_to(dots[1], RIGHT+DOWN)
        
        mid_OA = (dots[0]+dots[1])/2
        label_r = MathTex(r"r").next_to(mid_OA, direction=DOWN, buff=0.25)
        
        self.play(Create(circle))
        self.play(Create(r), Write(label_A), Write(label_O), Write(label_r))
        self.wait(30)
        self.play(FadeOut(circle), FadeOut(r), FadeOut(label_A), FadeOut(label_O), FadeOut(label_r))

class MyCircle_d(Scene):
    def construct(self):
        circle = Circle(radius=3.0, color=BLUE)
        circle.set_fill(BLUE, opacity=0.5)
        
        dots = np.array([[0, 0, 0], [3, 0, 0]])
        r = Line(dots[0], dots[1])

        diameter_start = circle.point_from_proportion(0.125)
        diameter_end = circle.point_from_proportion(0.625) 
        diameter = Line(diameter_start, diameter_end, color=BLUE)
        
        label_O = MathTex(r"O").next_to(dots[0], DOWN)
        label_A = MathTex(r"A").next_to(dots[1], RIGHT+DOWN)
        label_B = MathTex(r"B").next_to(diameter_end, LEFT+DOWN)
        label_C = MathTex(r"C").next_to(diameter_start, RIGHT+UP)
        
        label_d = MathTex(r"d").next_to([0, 0, 0], direction=UP, buff=0.25)
        mid_OA = (dots[0] + dots[1]) / 2
        label_r = MathTex(r"r").next_to(mid_OA, direction=DOWN, buff=0.25)
        
        self.play(Create(circle))
        self.play(Create(r), Write(label_A), Write(label_O), Write(label_r))
        self.play(Create(diameter), Write(label_B), Write(label_C), Write(label_d))
        self.wait(30)
        self.play(FadeOut(circle), FadeOut(r), FadeOut(label_A), FadeOut(label_O), FadeOut(label_r), 
                  FadeOut(diameter), FadeOut(label_A), FadeOut(label_O), FadeOut(label_r),
                  FadeOut(label_B), FadeOut(label_C), FadeOut(label_d))

class MySquare(Scene):
    def construct(self):
        vertices = np.array([
            [-3, -3, 0],
            [3, -3, 0],
            [3, 3, 0],
            [-3, 3, 0],
        ])
        
        square = Polygon(*vertices, color=RED)
        square.set_fill(RED, opacity=0.5)
        
        label_A = MathTex(r"A").next_to(vertices[0], LEFT+DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT+DOWN)
        label_C = MathTex(r"C").next_to(vertices[2], RIGHT+UP)
        label_D = MathTex(r"D").next_to(vertices[3], LEFT+UP)
        
        mid_BC = (vertices[1] + vertices[2])/2
        label_a = MathTex(r"a").next_to(mid_BC, direction=RIGHT, buff=0.25)
        
        self.play(Create(square), Write(label_A), Write(label_B), Write(label_C), Write(label_D), Write(label_a))
        self.wait(30)
        self.play(FadeOut(square), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_D), FadeOut(label_a))

class MySquare_line(Scene):
    def construct(self):
        vertices = np.array([
            [-3, -3, 0],
            [3, -3, 0],
            [3, 3, 0],
            [-3, 3, 0],
        ])
        
        square = Polygon(*vertices, color=RED)
        
        label_A = MathTex(r"A").next_to(vertices[0], LEFT+DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT+DOWN)
        label_C = MathTex(r"C").next_to(vertices[2], RIGHT+UP)
        label_D = MathTex(r"D").next_to(vertices[3], LEFT+UP)
        
        mid_BC = (vertices[1] + vertices[2])/2
        label_a = MathTex(r"a").next_to(mid_BC, direction=RIGHT, buff=0.25)
        
        self.play(Create(square), Write(label_A), Write(label_B), Write(label_C), Write(label_D), Write(label_a))
        self.wait(30)
        self.play(FadeOut(square), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_D), FadeOut(label_a))

class MySquare_d(Scene):
    def construct(self):
        vertices = np.array([
            [-3, -3, 0],
            [3, -3, 0],
            [3, 3, 0],
            [-3, 3, 0],
        ])
        
        square = Polygon(*vertices, color=RED)
        square.set_fill(RED, opacity=0.5)
        
        label_A = MathTex(r"A").next_to(vertices[0], LEFT+DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT+DOWN)
        label_C = MathTex(r"C").next_to(vertices[2], RIGHT+UP)
        label_D = MathTex(r"D").next_to(vertices[3], LEFT+UP)
        
        mid_BC = (vertices[1] + vertices[2])/2
        label_a = MathTex(r"a").next_to(mid_BC, direction=RIGHT, buff=0.25)
        
        diagonal = Line(vertices[0], vertices[2], color=RED)
        mid_d = (vertices[0] + vertices[2])/2
        label_d = MathTex(r"d").next_to(mid_d, direction=UP, buff=0.25)
        
        self.play(Create(square), Create(diagonal), Write(label_A), Write(label_B), Write(label_C), Write(label_D), Write(label_a), Write(label_d))
        self.wait(30)
        self.play(FadeOut(square), FadeOut(diagonal), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_D), FadeOut(label_a), Write(label_d))

class MyRectangle(Scene):
    def construct(self):
        vertices = np.array([
            [-5, -3, 0],
            [5, -3, 0],
            [5, 3, 0],
            [-5, 3, 0],
        ])
        
        rectangle = Polygon(*vertices, color=ORANGE)
        rectangle.set_fill(ORANGE, opacity=0.5)
        
        label_A = MathTex(r"A").next_to(vertices[0], LEFT+DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT+DOWN)
        label_C = MathTex(r"C").next_to(vertices[2], RIGHT+UP)
        label_D = MathTex(r"D").next_to(vertices[3], LEFT+UP)
        
        mid_AB = (vertices[0] + vertices[1])/2
        mid_BC = (vertices[1] + vertices[2])/2
        label_l = MathTex(r"l").next_to(mid_AB, direction=DOWN, buff=0.25)
        label_w = MathTex(r"w").next_to(mid_BC, direction=RIGHT, buff=0.25)
        
        self.play(Create(rectangle), Write(label_A), Write(label_B), Write(label_C), Write(label_D), Write(label_l), Write(label_w))
        self.wait(30)
        self.play(FadeOut(rectangle), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_D), FadeOut(label_l), FadeOut(label_w))

class MyRectangle_line(Scene):
    def construct(self):
        vertices = np.array([
            [-5, -3, 0],
            [5, -3, 0],
            [5, 3, 0],
            [-5, 3, 0],
        ])
        
        rectangle = Polygon(*vertices, color=ORANGE)
        
        label_A = MathTex(r"A").next_to(vertices[0], LEFT+DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT+DOWN)
        label_C = MathTex(r"C").next_to(vertices[2], RIGHT+UP)
        label_D = MathTex(r"D").next_to(vertices[3], LEFT+UP)
        
        mid_AB = (vertices[0] + vertices[1])/2
        mid_BC = (vertices[1] + vertices[2])/2
        label_l = MathTex(r"l").next_to(mid_AB, direction=DOWN, buff=0.25)
        label_w = MathTex(r"w").next_to(mid_BC, direction=RIGHT, buff=0.25)
        
        self.play(Create(rectangle), Write(label_A), Write(label_B), Write(label_C), Write(label_D), Write(label_l), Write(label_w))
        self.wait(30)
        self.play(FadeOut(rectangle), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_D), FadeOut(label_l), FadeOut(label_w))

class MyRectangle_d(Scene):
    def construct(self):
        vertices = np.array([
            [-5, -3, 0],
            [5, -3, 0],
            [5, 3, 0],
            [-5, 3, 0],
        ])
        
        rectangle = Polygon(*vertices, color=ORANGE)
        rectangle.set_fill(ORANGE, opacity=0.5)
        
        label_A = MathTex(r"A").next_to(vertices[0], LEFT+DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT+DOWN)
        label_C = MathTex(r"C").next_to(vertices[2], RIGHT+UP)
        label_D = MathTex(r"D").next_to(vertices[3], LEFT+UP)
        
        mid_AB = (vertices[0] + vertices[1])/2
        mid_BC = (vertices[1] + vertices[2])/2
        label_l = MathTex(r"l").next_to(mid_AB, direction=DOWN, buff=0.25)
        label_w = MathTex(r"w").next_to(mid_BC, direction=RIGHT, buff=0.25)
        
        diagonal = Line(vertices[0], vertices[2], color=ORANGE)
        mid_d = (vertices[0] + vertices[2])/2
        label_d = MathTex(r"d").next_to(mid_d, direction=UP, buff=0.25)
        
        self.play(Create(rectangle), Create(diagonal), Write(label_A), Write(label_B), Write(label_C), Write(label_D), Write(label_l), Write(label_w), Write(label_d))
        self.wait(30)
        self.play(FadeOut(rectangle), FadeOut(diagonal), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_D), FadeOut(label_l), FadeOut(label_w), FadeOut(label_d))

class MyTriangle_abc_line(Scene):
    def construct(self):
        vertices = np.array([[-5, -3, 0], [5, -1, 0], [0, 3, 0]])

        triangle = Polygon(*vertices, color=GREEN)

        label_A = MathTex(r"A").next_to(vertices[0], DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT)
        label_C = MathTex(r"C").next_to(vertices[2], UP)
        
        mid_AB = (vertices[0] + vertices[1]) / 2
        mid_BC = (vertices[1] + vertices[2]) / 2
        mid_CA = (vertices[2] + vertices[0]) / 2

        label_a = MathTex(r"a").next_to(mid_BC, direction=UP, buff=0.25)
        label_b = MathTex(r"b").next_to(mid_CA, direction=LEFT, buff=0.25)
        label_c = MathTex(r"c").next_to(mid_AB, direction=DOWN, buff=0.25)

        self.play(Create(triangle), Write(label_A), Write(label_B), Write(label_C), Write(label_a), Write(label_b), Write(label_c))
        self.wait(30)
        self.play(FadeOut(triangle), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_a), FadeOut(label_b), FadeOut(label_c))

class MyTriangle_abc(Scene):
    def construct(self):
        vertices = np.array([[-5, -3, 0], [5, -1, 0], [0, 3, 0]])

        triangle = Polygon(*vertices, color=GREEN)
        triangle.set_fill(GREEN, opacity=0.5)

        label_A = MathTex(r"A").next_to(vertices[0], DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], RIGHT)
        label_C = MathTex(r"C").next_to(vertices[2], UP)
        
        mid_AB = (vertices[0] + vertices[1]) / 2
        mid_BC = (vertices[1] + vertices[2]) / 2
        mid_CA = (vertices[2] + vertices[0]) / 2

        label_a = MathTex(r"a").next_to(mid_BC, direction=UP, buff=0.25)
        label_b = MathTex(r"b").next_to(mid_CA, direction=LEFT, buff=0.25)
        label_c = MathTex(r"c").next_to(mid_AB, direction=DOWN, buff=0.25)

        self.play(Create(triangle), Write(label_A), Write(label_B), Write(label_C), Write(label_a), Write(label_b), Write(label_c))
        self.wait(30)
        self.play(FadeOut(triangle), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(label_a), FadeOut(label_b), FadeOut(label_c))
        
class MyTriangle_bh(Scene):
    def construct(self):
        vertices = np.array([[-5, -3, 0], [6, -3, 0], [-2, 3, 0]])

        triangle = Polygon(*vertices, color=GREEN)
        triangle.set_fill(GREEN, opacity=0.5)

        height_point = np.array([vertices[2][0], vertices[1][1], 0])
        mid_height = (vertices[2] + height_point) / 2
        mid_base = (vertices[0] + vertices[1]) / 2

        height_line = Line(vertices[2], height_point, color=GREEN)

        right_angle = RightAngle(height_line, Line(vertices[0], vertices[1]), length=0.2, stroke_width=2.5, quadrant=(-1,1))

        label_A = MathTex(r"A").next_to(vertices[0], DOWN)
        label_B = MathTex(r"B").next_to(vertices[1], DOWN)
        label_C = MathTex(r"C").next_to(vertices[2], UP)
        label_h = MathTex(r"h").next_to(mid_height, LEFT, buff=0.1)
        label_b = MathTex(r"b").next_to(mid_base, DOWN, buff=0.1)

        self.play(Create(triangle), Write(label_A), Write(label_B), Write(label_C), Create(height_line), Write(label_h), Write(label_b), Create(right_angle))
        self.wait(30)
        self.play(FadeOut(triangle), FadeOut(label_A), FadeOut(label_B), FadeOut(label_C), FadeOut(height_line), FadeOut(label_h), FadeOut(label_b), Create(right_angle))

class Pythagoras(Scene):
    def construct(self):
        square_vertices = np.array([
            [-3.5, -3.5, 0],
            [3.5, -3.5, 0],
            [3.5, 3.5, 0],
            [-3.5, 3.5, 0]
        ])
        
        triangle1_vertices = np.array([
            [-0.5, 3.5, 0],
            [-3.5, 3.5, 0],
            [-3.5, -0.5, 0]
        ])
        
        triangle2_vertices = np.array([
            [-3.5, -0.5, 0],
            [-3.5, -3.5, 0],
            [0.5, -3.5, 0]
        ])
        
        triangle3_vertices = np.array([
            [0.5, -3.5, 0],
            [3.5, -3.5, 0],
            [3.5, 0.5, 0]
        ])
        
        triangle4_vertices = np.array([
            [3.5, 0.5, 0],
            [3.5, 3.5, 0],
            [-0.5, 3.5, 0]
        ])
        
        area_c_vertices = np.array([
            [-0.5, 3.5, 0],
            [-3.5, -0.5, 0],
            [0.5, -3.5, 0],
            [3.5, 0.5, 0]
        ])
        
        square = Polygon(*square_vertices, color=WHITE)
        triangle1 = Polygon(*triangle1_vertices, color=BLUE)
        triangle1.set_fill(BLUE, opacity=0.5)
        triangle2 = Polygon(*triangle2_vertices, color=GREEN)
        triangle2.set_fill(GREEN, opacity=0.5)
        triangle3 = Polygon(*triangle3_vertices, color=BLUE)
        triangle3.set_fill(BLUE, opacity=0.5)
        triangle4 = Polygon(*triangle4_vertices, color=GREEN)
        triangle4.set_fill(GREEN, opacity=0.5)
        
        area_c = Polygon(*area_c_vertices, color=RED)
        area_c.set_fill(RED, opacity=0.5)
        intersect = [0,0,0]
        
        label_a1 = MathTex(r"a").next_to([-2, 3.5, 0], UP, buff=0.1)
        label_b1 = MathTex(r"b").next_to([-3.5, 1.5, 0], LEFT, buff=0.1)
        label_a2 = MathTex(r"a").next_to([-3.5, -2, 0], LEFT, buff=0.1)
        label_b2 = MathTex(r"b").next_to([-1.5, -3.5, 0], DOWN, buff=0.1)
        label_a3 = MathTex(r"a").next_to([2, -3.5, 0], DOWN, buff=0.1)
        label_b3 = MathTex(r"b").next_to([3.5, -1.5, 0], RIGHT, buff=0.1)
        label_a4 = MathTex(r"a").next_to([3.5, 2, 0], RIGHT, buff=0.1)
        label_b4 = MathTex(r"b").next_to([1.5, 3.5, 0], UP, buff=0.1)
        
        label_c1 = MathTex(r"c").next_to([-2, 1.5, 0], UP+LEFT, buff=0.1)
        label_c2 = MathTex(r"c").next_to([-1.5, -2, 0], DOWN+LEFT, buff=0.1)
        label_c3 = MathTex(r"c").next_to([2, -1.5, 0], DOWN+RIGHT, buff=0.1)
        label_c4 = MathTex(r"c").next_to([1.5, 2, 0], UP+RIGHT, buff=0.1)
        label_c = MathTex(r"c^2").next_to(intersect, buff=0)
        
        self.play(Create(square), Create(triangle1), Create(triangle2), Create(triangle3), Create(triangle4),
                  Write(label_a1), Write(label_a2), Write(label_a3), Write(label_a4), 
                  Write(label_b1), Write(label_b2), Write(label_b3), Write(label_b4),
                  Write(label_c1), Write(label_c2), Write(label_c3), Write(label_c4), Write(label_c)
                )
        self.wait(5)
        self.play(FadeOut(label_a1), FadeOut(label_a2), FadeOut(label_a3), FadeOut(label_a4), 
                  FadeOut(label_b1), FadeOut(label_b2), FadeOut(label_b3), FadeOut(label_b4),
                  FadeOut(label_c1), FadeOut(label_c2), FadeOut(label_c3), FadeOut(label_c4), FadeOut(label_c)
                )
        
        triangle2.generate_target()
        triangle3.generate_target()
        triangle4.generate_target()
        pre = 0.5
        
        triangle2.target.shift((3.5-pre)*RIGHT)
        triangle3.target.shift((3.5-pre)*UP + (3.5+pre)*LEFT)
        triangle4.target.shift((3.5+pre)*DOWN)
        self.play(MoveToTarget(triangle2), MoveToTarget(triangle3), MoveToTarget(triangle4))
        self.wait(2)
        
        blue_square_vertices = np.array([
            [-3.5, 3.5, 0],
            [-3.5, -0.5, 0],
            [-0.5, -0.5, 0],
            [-0.5, 3.5, 0]
        ])
        blue_square = Polygon(*blue_square_vertices, color=BLUE)
        blue_square.set_fill(BLUE, opacity=0.5)
        self.remove(triangle1, triangle3)
        self.add(blue_square)
        
        green_square_vertices = np.array([
            [-0.5, -0.5, 0],
            [3.5, -0.5, 0],
            [3.5, -3.5, 0],
            [-0.5, -3.5, 0]
        ])
        green_square = Polygon(*green_square_vertices, color=GREEN)
        green_square.set_fill(GREEN, opacity=0.5)
        self.remove(triangle2, triangle4)
        self.add(green_square)
        
        label_a = MathTex(r"a^2").next_to([-2, -2, 0], buff=0)
        label_b = MathTex(r"b^2").next_to([1.5, 1.5, 0], buff=0)
        
        self.play(Write(label_a), Write(label_b),
                  Write(label_a1), Write(label_a2), 
                  Write(label_b1), Write(label_b4)
                )
        self.wait(2)