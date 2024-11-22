<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $products = Product::with('category')
                ->select([
                    'id',
                    'name',
                    'description',
                    'price',
                    'stock',
                    'category_id',
                    'image_url',
                    'active',
                    'created_at'
                ])
                ->latest()
                ->get()
                ->map(function ($product) {
                    return [
                        'id' => $product->id,
                        'name' => $product->name,
                        'description' => $product->description,
                        'price' => (float) $product->price,
                        'stock' => (int) $product->stock,
                        'category' => $product->category ? $product->category->name : null,
                        'category_id' => $product->category_id,
                        'image_url' => $product->image_url,
                        'active' => (bool) $product->active,
                        'created_at' => $product->created_at
                    ];
                });

            return response()->json($products, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al obtener los productos',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'description' => 'nullable|string',
                'price' => 'required|numeric|min:0',
                'stock' => 'required|integer|min:0',
                'category_id' => 'required|exists:categories,id',
                'image_url' => 'nullable|string',
                'active' => 'boolean|nullable'
            ]);

            $validated['active'] = $validated['active'] ?? true;

            $product = Product::create($validated);
            
            $product->load('category');
            $response = [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'price' => (float) $product->price,
                'stock' => (int) $product->stock,
                'category' => $product->category->name,
                'category_id' => $product->category_id,
                'image_url' => $product->image_url,
                'active' => (bool) $product->active,
                'created_at' => $product->created_at
            ];

            return response()->json($response, Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al crear el producto',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $product = Product::findOrFail($id);
            
            $validated = $request->validate([
                'name' => 'sometimes|required|string|max:255',
                'description' => 'nullable|string',
                'price' => 'sometimes|required|numeric|min:0',
                'stock' => 'sometimes|required|integer|min:0',
                'category_id' => 'sometimes|required|exists:categories,id',
                'image_url' => 'nullable|string',
                'active' => 'boolean|nullable'
            ]);

            $product->update($validated);
            
            $product->load('category');
            $response = [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'price' => (float) $product->price,
                'stock' => (int) $product->stock,
                'category' => $product->category->name,
                'category_id' => $product->category_id,
                'image_url' => $product->image_url,
                'active' => (bool) $product->active,
                'updated_at' => $product->updated_at
            ];

            return response()->json($response, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al actualizar el producto',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy($id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();
            return response()->json(null, Response::HTTP_NO_CONTENT);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al eliminar el producto',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function indexWeb()
    {
        $products = Product::with('category')->get();
        $categories = Category::all();
        return view('products.index', compact('products', 'categories'));
    }

    public function getCategories()
    {
        try {
            $categories = Category::select('id', 'name')->get();
            return response()->json($categories, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error al obtener las categorías',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}